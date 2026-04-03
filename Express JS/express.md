# Express JS

- A Node.js web application framework that helps us to make web applications.
- It is used for **server** side programming or used to create a **server**.
- Before installing express, Initalize the project folder using **`npm init`** or **`npm init -y`** and then install using **`npm install express`**.

## Uses of Express JS

- Listen for incoming requests
- Parse requests
- Match response with routes
- Send suitable response

---

## Library v/s Framework

### Library

- A library is a collection of pre-written code that can be used to perform specific tasks.
- Example : axios.

### Framework

- A Framework is a pre-written code that provides a structure for developing software applications.
- Example : Express.

---

## Getting started with Express

```javascript
    const express = require("express");
    const app = express(); // Store returned data

    let port = 8000; // 3000, 5500, 8080...

    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    });
```

- **`app.listen(port, callbackfxn)`** starts a continous process of listing requests continously. To stop this process we can use 'ctrl+C'.
- ***Ports :*** Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

### Handling Requests

```javascript
    app.use((req, res) => {
        // console.log(req);
        console.log("Request Received");
    });
```

**`app.use`** : It takes(listen) every type of request like - GET, POST or any URL. And reture a same response for all paths.

### Sending a response

- **`res.send([body])`** : The **body** parameter can be a ***Buffer object***, a ***String***, an ***object***, ***Boolean***, an ***Array*** or ***HTML Content***

```javascript
    app.use((req, res) => {
        // res.send("This is a basic response.");
        // res.send({
        //     name : "apple",
        //     color : "red"
        // });
        let code = "<h1>Fruits</h1> <ul> <li>Apple</li><li>Orange</li> </ul>";
        res.send(code);
    });
```

- Coming **https** requests are text based. So the ***request*** paramenter convert **https** request into an ***object***. This process known as **Parsing**.
- **`res.send([body])`** : Sends the HTTP response. And also sends the same reponse for all routes.

---

## Routing

- Routing is a process of selecting a path for traffic in a network or between or across multiple networks.
- **`app.get(path, callback [, callback ...])`** : Routes HTTP GET requests to the specified path with the specified callback functions. For more information visit [app.get()](https://expressjs.com/en/5x/api.html#app.get.method).

```javascript
    app.get('/', (req, res) => {
        res.send("You contacted root path");
    });

    app.get('/about', (req, res) => {
        res.send("You contacted about path");
    });

    app.get('/help', (req, res) => {
        res.send("You contacted help path");
    });

    app.get("/{*splat}", (req, res) => {
        console.log("Path Not Found");
        res.send("This path does not exist");
    });

    app.post('/', (req, res) => {
        console.log("POST resquest");
        res.send("You send a post request to root");
    });
```

- **`/{*splat}`** : This is a **wildcard** pattern which fire then when any path not matched.
- Don't send different responses for the same path. But we can send the different responses for different paths.

---

## Nodemon

- Used to ***automatically restart server*** with code changes.
- **`npm install -g nodemon`** : Used to install Nodemon globally.
- **`nodemon [your node app]`** : Used to run server.

---

## Path Parameters

- we define parameters using ***colon with variable(parameter)*** after forward slash.
- **`/:parameter1/:parameter2`** : Takes parameter as you need.

```javascript
    app.get("/:username/:id", (req, res) => {
        let {username, id} = req.params;
        let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
        res.send(htmlStr);
    });
```

---

## Query Strings

- **`res.query()`** : To find the all queries which comes with request.
- Represented as ***`q=Query*`*** in URL.

```javascript
    app.get("/search", (req, res) => {
        let { q } = req.query;
        if (!q) {
            res.send("<h1>Nothing Searched</h1>");
        } else {
            res.send(`Search results for query: ${q}`);
        }
    });
```

---
