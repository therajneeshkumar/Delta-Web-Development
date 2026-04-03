# EJS (Embedded JavaScript)

## Tempalting

- ***EJS*** : Embedded JavaScript Templates
- EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

---

## Using EJS

- Before using EJS we use this :

- ***index.js***

```javascript
    app.set("view engine", "ejs");

    app.get("/", (req, res) => {
        // res.render("home");
        res.render("home.ejs");
    })
```

  > Here **view** means **templates**

- The views file **extension** must be **`fileName.ejs`**.
- All **`.ejs`** files must be inside a **`views`** folder.
- In these files, we write our mixed code of both **HTML** & **JavaScript**.

> If **Cannot find module 'ejs'** error occur then install ejs using **`npm install ejs`**. And also install **EJS language support** Extension in VS Code.

---

## Views Directory

- When we start a server using **parent Directory** by command **`nodemon parentDir/index.js`** then ***Failed to lookup view "home.ejs" in views directory*** error occur.
- To resolve this error, we use this in ***`index.js`***:

```javascript
    const path = require("path");

    app.set("views", path.join(__dirname, "/views"));
```

---

## Interpolation Syntax

- Interpolation refers to **embedding expression** into marked up text.
- We make HTML to **dyanmic** by using **EJS**.

### Tags

- **`<%=`** Outputs the value into the template (HTML escaped)
- **`<%#`** Comment tag, no execution, no output
- **`%>`** Plain ending tag

- ***home.ejs***

```javascript
    <h3> <%= 1+2 %> </h3> <%# Return 3 %>
    <h3> <%= "apnacollage".toUpperCase() %> </h3> <%# Return 'APNACOLLEGE' %>
    <h3> <%= ["hello", "bonjour", "namaste"][2] %> </h3> <%# Return 'namaste' %>
```

---

## Passing date to EJS

- Parssing Date to EJS means passing the ***variable*** in HTML to get values dynamincally. This value is rendered by the **`index.js`** file with same ***varibale***.

- ***rolldice.ejs***

```html
    <!-- <h1>Dice gave value :
        <%# Math.floor(Math.random() * 6) + 1 %>
    </h1> -->
    <h1>Dice gave value :
        <%= diceVal %>
    </h1>
```

- ***index.js***

```javascript
    app.get("/rolldice", (req, res) => {
        let diceVal = Math.floor(Math.random() * 6) + 1;
        // res.render("rolldice.ejs", { num : diceVal });
        // res.render("rolldice.ejs", { diceVal : diceVal });
        res.render("rolldice.ejs", { diceVal });
    });
```

---

## Conditional Statements

- Adding conditions inside EJS.
- **`<%`** 'Scriptlet' tag, for control-flow, no output

- ***rolldice.ejs***

```javascript
    <% if (diceVal===6) { %>
        <h2>Nice! Roll dice again.</h2>
    <% } %>
```

---

## Loops

- ***instagram.ejs***

```html
    <% for (let name of followers) { %>
        <li>@<%= name %></li>
    <% } %>
```

- ***index.js***

```javascript
    app.get("/ig/:username", (req, res) => {
        let followers = ['adam', 'bob', 'john', 'steve', 'abc'];
        let { username } = req.params;
        res.render('instagram.ejs', { username, followers })
    });
```

---

## Instagram Activity Page with EJS

- ***instagram.ejs***

```html
    <h2> This page belongs to @<%= username %>
    </h2>
    <button>Follow</button>
    <button>Message</button>

    <p>
        Followers : <%= data.followers %> &nbsp;&nbsp;&nbsp;&nbsp; Following : <%= data.following %>
    </p>
    <hr>
    <% for (const post of data.posts) { %>
        <img src="<%= post.image %>" alt="Some Image">
        <p>
            Likes : <%= post.likes %> &nbsp;&nbsp;&nbsp;&nbsp; Comments : <%= post.comments %>
        </p>
    <% } %>
```

- ***index.js***

```javascript
    app.get("/ig/:username", (req, res) => {
        let { username } = req.params;
        let instaData = require("./data.json");
        const data = instaData[username] 
        console.log(data);

        if (data) {
            res.render('instagram.ejs', { username, data });
        } else {
            res.render('error', { username, data});
        }
    });
```

---

## Includes

- **`<%-`** Outputs the unescaped value into the template.
- Syntax : **`<%- include('user/show'); %>`**
- This used as requirments of includes templates. And these all templates are inside a folder named **includes**.

- ***instagram.ejs***

```html
    <%- include("includes/head.ejs"); %>
    <%- include("includes/footer.ejs"); %>
```

  > **Note :** Inside ***include()*** method, the path of templates should ***not*** contain any ***forward slash (/) in starting***. If there are any forward slash then we got an ***error***.

---

## Linking External CSS

- First create a folder named **public**. This folder contains ***images, css*** and ***js*** files. And also creates a *respective folder* for *respective type of container*. And then create files.

- ***index.js***

```javascript
    app.use(express.static(path.join(__dirname, "public")));
```

- ***head.ejs***

```html
    <link rel="stylesheet" href="/css/style.css">
```

  > **Note :** In ***href's*** path, the forward slash (/) must be **required** in starting. Otherwise we got an ***error***.

---
