# REST APIs

- **Representational State Transfer**
- REST is an architectural style that defines a set of constraints (rules) to be used for creating web services.
- **RESTful APIs** are those api which are follows the REST APIs rules.
- RESTful APIs are used to perform the **CRUD** Operations.
  - **C :** Create
  - **R :** Read
  - **U :** Update
  - **D :** Delete

---

## CURD Operation

- When **Read** operation performs then **GET** request used for ***Retrieves Resources***.
- When **Create** operation performs then **POST** request used to ***submit new data to the server***.
- When **Update** operation performs then **POST** request used to ***update whole existing data***.
- When **Update** operation performs then **PATCH** request used to ***update existing data partially***.
- When **Delete** operation performs then **DELETE** request used to ***remove data***.

---

## Creating RESTful APIs

| Requests | APIs       |         Description        |     Route    |  
|----------|------------|----------------------------|--------------|
| GET      | /posts     | to get data from all posts | INDEX (main) |
| POST     | /posts     | to add a new post          | CREATE       |
| GET      | /posts/:id | to get one post (using id) | VIEW         |
| PATCH/PUT| /posts/:id | to update specific post    | UPDATE       |
| DELETE   | /posts/:id | to delete specific post    | DESTROY      |

---

## Index Route

- Implement : **GET** *`/posts`*

- ***index.ejs***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Posts</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Quora Post</h1>

    <!-- ejs Template -->
    <% for (const post of posts) { %>
        <div class="post">
            <h3 class="user">@<%= post.username %></h3>
            <p class="content"><%= post.content %></p>
        </div>
    <% } %>
</body>
</html>
```

- ***index.js***

```javascript
let posts = [
    {
        username : "apnacollege",
        content : "I love coding"
    },
    {
        username : "abhishek",
        content : "Hard work is important to achieve success"
    },
    {
        username : "rahul",
        content : "I got selected for my 1st Internship"
    }
]

/* Index Route : where shows whole content of all users */
app.get("/posts", (req, res) => {
    // res.send("Server working well");
    res.render("index.ejs", { posts });
});
```

---

## Create Route

- Implement : **POST** *`/posts`*
- For implementation this we want to create **2 routes**.
  - Serve the form
    - **GET** *`/posts/new`*
  - Add the new post
    - **POST** *`/posts`*

- ***index.ejs***

```html
<a href="http://localhost:8080/posts/new">Create New Post</a>
```

- ***new.ejs***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create New Post</title>
</head>
<body>
    <form action="/posts" method="post">
        <input type="text" name="username" id="username" placeholder="Enter username"> <br> <br>
        <textarea name="content" id="content" rows="5" cols="30"></textarea> <br>
        <button>Submit Post</button>
    </form>
</body>
</html>
```

- ***index.js***

```javascript
app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    // console.log(req.body);
    // posts.push(req.body);
    let {username, content} = req.body;
    posts.push({username, content});
    res.send("Post request working");
});
```

---

## Redirect

- Used to connect different pages.
- **`res.redirect(url/path)`**

- ***index.js***

```javascript
app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts");
});
```

---

## Show(View) Route

- Implement : **GET** *`/posts/:id`*

- ***index.ejs***

```html
<% for (const post of posts) { %>
        <div class="post">
            <h3 class="user">@<%= post.username %></h3>
            <p class="content"><%= post.content %></p>
            <br>
            <a href="http://localhost:8080/posts/<%= post.id %>">See in Detail</a>
        </div>
<% } %>
```

- ***show.ejs***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Post in Detail</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h2>Here is your post in detail</h2>
    <p>Post id : <%= post.id %></p>
    <div class="post">
        <h3 class="user">@<%= post.username %></h3>
        <p class="content"><%= post.content %></p>
    </div>
</body>
</html>
```

- ***index.js***

```javascript
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs", { post });
});
```

---

## Create Unique IDs

- **UUID** Package
- ***Universally Unique Identifier***
- **`npm install uuid`**
- Creates random string type unique id.

- ***index.js***

```javascript
const { v4 : uuidv4} = require('uuid');

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

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});
```

---

## Update Route

- Implement : **PATCH** *`/posts/:id`*
- We can also use **PUT** resquest with similar syntax.

- ***index.js***

```javascript
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let newContent = req.body.content;
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.send("patch request working");
});
```

> ***NOTE :*** Send request using [hoppscotch.io](https://hoppscotch.io/).

---

## Edit Route

- Implement : **GET** *`/posts/:id/edit`*

- ***edit.ejs***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Post</title>
</head>
<body>
    <h2>Edit Your Post</h2>
    <p>Post id : <%= post.id %></p>
    <p>Post username : <%= post.username %></p>
    <form action="/posts/<%= post.id%>?_method=PATCH" method="post">
        <textarea name="content" id="content" rows="8" cols="35"><%= post.content %></textarea> <br>
        <button>Submit</button>
    </form>
</body>
</html>
```

- ***index.ejs***

```html
<% for (const post of posts) { %>
        <div class="post">
            <h3 class="user">@<%= post.username %></h3>
            <p class="content"><%= post.content %></p>
            <br>
            <a href="http://localhost:8080/posts/<%= post.id %>">See in Detail</a>
            <a href="http://localhost:8080/posts/<%= post.id %>/edit">Edit</a>
        </div>
<% } %>
```

- ***index.js***

```javascript
const methodOverride = require('method-override');

app.use(mathodOverride('_method'));

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
```

> ***NOTE :*** We used **method-override** package to change the **form submit method**.
> To install this package, use **`npm install method-override`**  

- > We Use **query override** using HTML *`<form>`* : In action, **?_method=methodName** must be required.  
- > **`<form method="POST" action="/resource?_method=DELETE"></form>`**

---

## Destory Route

- Implement : **DELETE** *`/posts/:id`*

- ***index.ejs***

```html
<% for (const post of posts) { %>
    <div class="post">
        <h3 class="user">@<%= post.username %></h3>
        <p class="content"><%= post.content %></p>
        <br>
        <a href="http://localhost:8080/posts/<%= post.id %>">See in Detail</a>
        <a href="http://localhost:8080/posts/<%= post.id %>/edit">Edit</a>
        <!-- Delete post using method-override -->
        <form action="/posts/<%= post.id %>?method=DELETE" method="post">
            <button>Delete Post</button>
        </form>
    </div>
<% } %>
```

- ***index.js***

```javascript
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Delete success");
    res.redirect("/posts");
});
```

---
