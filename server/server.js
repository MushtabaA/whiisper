import express from "express";
import dotenv from 'dotenv';
import ejs from "ejs";
import mongoose from "mongoose";
import session from 'express-session';
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { User } from "./models/userModel.js";

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

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true});

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

app.post("/signup", function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        name: name,
        email: email,
        password: password,
    });

    newUser.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("User successfully created");
        }
    });

});