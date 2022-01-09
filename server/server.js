const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

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