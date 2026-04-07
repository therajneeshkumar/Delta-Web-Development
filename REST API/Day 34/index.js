const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4 : uuidv4} = require('uuid');
const methodOverride = require('method-override');

/* Set middleware : Used to parse data */
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {   
        // id : "1a",
        id : uuidv4(),
        username : "apnacollege",
        content : "I love coding"
    },
    {
        // id : "2b",
        id : uuidv4(),
        username : "abhishek",
        content : "Hard work is important to achieve success"
    },
    {
        // id : "3c",
        id : uuidv4(),
        username : "rahul",
        content : "I got selected for my 1st Internship"
    }, 
    {
        // id : '400',
        id : uuidv4(),
        username : "thestarguys",
        content : "Congratulations! You Got 400K subscriber's on @thestarguys YouTube channel and also have 80K followers on Instagram."
    }
];

/* Index Route : where shows whole content of all users */
app.get("/posts", (req, res) => {
    // res.send("Server working well");
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
});

app.post("/posts", (req, res) => {
    console.log(req.body);
    // posts.push(req.body);
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("Post request working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // console.log(post);
    // res.send("patch request working");
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Delete success");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.listen(port, () => {
    console.log(`Server start at prot ${port}`);
});