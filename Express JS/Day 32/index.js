const express = require('express');
const app = express();
const path = require("path");

let port = 8100;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    // res.send("This is home");
    res.render("home.ejs");
    // res.render("home");
});

app.get("/hello", (req, res) => {
    res.send("This is Hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs", { num : diceVal });
    // res.render("rolldice.ejs", { diceVal : diceVal });
    res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
    let followers = ['adam', 'bob', 'john', 'steve', 'abc'];
    let { username } = req.params;
    let instaData = require("./data.json");
    const data = instaData[username] 
    console.log(data);

    if (data) {
        res.render('instagram.ejs', { username, followers, data });
    } else {
        res.render('error', { username, data});
    }

    // res.render('instagram.ejs', { username, followers });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});