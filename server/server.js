import express from "express";
import dotenv from 'dotenv';
import ejs from "ejs";
import mongoose from "mongoose";
import session from 'express-session';
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { User, Whisper } from "./models/userModel.js";

dotenv.config();
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

app.get("/whiisper", async function(req, res) {
    if (req.isAuthenticated()) {
        const whispers = await Whisper.find();
        res.render("whiisper", {whispers: whispers});
    } else {
        res.render("home");
    }
});

app.get("/submitwhiisper", function(req, res) {
    if (req.isAuthenticated()) {
        res.render("submitwhiisper");
    } else {
        res.render("home");
    }
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.post("/login", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email: email,
        password: password
    });

    passport.authenticate('local', function(err, newUser) {
        if (err) { 
            console.log(err); 
        }
        if (!newUser) { 
            return res.redirect('/login'); 
        }
        req.logIn(newUser, function(err) {
          if (err) { 
            console.log(err); 
        }
          return res.redirect("/whiisper");
        });
      })(req, res);
});

app.post("/signup", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;

    const newUser = new User({
        name: name,
        email: email
    });

    User.register(newUser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/signup");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/whiisper");
            });
        }
    });
});

app.post("/submitwhiisper", function(req, res) {
    const whisper = req.body.whiisper;

    if (whisper.length == 0) {
        return res.redirect("/submitwhiisper");
    }

    const newWhisper = new Whisper({
        whisper: whisper
    });

    newWhisper.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/whiisper");
        }
    });
});