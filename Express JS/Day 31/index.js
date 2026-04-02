const express = require("express");
const app = express(); // Store returned data

// console.dir(app);

let port = 8000; // 3000, 5500, 8080...

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

/* app.listen(port, callbackfxn) starts a continous process of listing requests continously. To stop this process we can use 'ctrl+C'.*/

// app.use((req, res) => {
//     // console.log(req);
//     console.log("Request Received");
//     // res.send("This is a basic response.");
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // });
//     let code = "<h1>Fruits</h1> <ul> <li>Apple</li><li>Orange</li> </ul>";
//     res.send(code);
// });

app.get('/', (req, res) => {
    console.log("Reached Root Path");
    // res.send("You contacted root path");
    res.send("Hello, I am root");
});

app.get('/about', (req, res) => {
    console.log("Reached About Path");
    res.send("You contacted about path");
});

app.get('/help', (req, res) => {
    console.log("Reached Help Path");
    res.send("You contacted help path");
});

// app.get("/{*splat}", (req, res) => {
//     console.log("Path Not Found");
//     res.send("This path does not exist");
// });

app.post('/', (req, res) => {
    console.log("POST resquest");
    res.send("You send a post request to root");
});

app.get("/:username/:id", (req, res) => {
    // console.log(req.params);    // Returns the request's parameter
    // res.send("Path parameter using variable");
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    // console.log(req.query);
    // res.send("No result");
    let {q, ...rest} = req.query;
    let arr = [];
    for (key in rest) {
        arr.push(`${key} : ${rest[key]}`);
    }
    if (!q) {
        res.send("<h1>Nothing Searched</h1>");
    } else {
        res.send(`<h1>Search results for query: ${q} and other queries : ${arr}</h1>`);
    }
});