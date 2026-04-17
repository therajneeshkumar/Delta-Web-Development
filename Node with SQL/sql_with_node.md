# Node With SQL

## Faker

- Used to generate fake data.
- Search **@faker-js/faker** at [npmjs.com](https://www.npmjs.com/).
- Now Install using **`npm i @faker-js/faker`**

```javascript
// Using CJS(Common JS)
const { faker } = require('@faker-js/faker');

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

console.log(getRandomUser());
```

---

## MySQL2 Package

- Used to connect Node with MySQL.
- Use **`connection.end();`** to close connection.
- Used to link database with server.
- Install this package using **`npm i mysql2`** command.

- ***index.js***

```javascript
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // Use a database which is created in the SQL Workbench
    database: 'deltaApp',
    // Use your database root password
    password: 'sql2026',
});

try {
    /* connection.query('SQL_Query', 'callback_fxn') */
    // Used to make changes in database using the created connection
    connection.query("SHOW TABLES", (err, result) => {
        if (err) return err;
        console.log(result);
    })

    /* Pass query using a variable */
    let q = "SHOW TABLES";
    connection.query(q, (err, result) => {
        if (err) return err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
} catch (err) {
    console.log(err);
}

// Used to stop the connection b/w server and database
connection.end();
```

---

## Using SQL from CLI

- **`/usr/local/mysql/bin/mysql -u root -p`** : Used in Linux/macOS.
- For windows, Run **`mysql -u root -p`** command in terminal to use SQL from CLI.
- Enter your mysql password to use mysql in terminal.
- Select database using **`USE databaseName`**.
- To run datbase file in teminal, use **`source databaseFile`**

  > ***Note :*** Before run the file, we are at the same path where the database-file is present.

---

## Manually INSERT Data Into Table

```sql
/* INSERT data using palceholder : ? is work as placeholder and defining these values in an array at the end of query with comma separated. */

let query = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let newuser = ["123", "123_newuser", "abc@gmail.com", "abc"];
connection.query(query, newuser, (err, result) => {
    if (err) return err;
    console.log(result);
});

/* When we want to add multiple users */
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let newusers = [
    ["123b", "123_newuserb", "abc@gmail.comb", "abcb"], 
    ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
];
connection.query(query, [newusers], (err, result) => {
    if (err) return err;
    console.log(result);
});
```

---

## Dyanamically INSERT Data Into Table (INSERT in Bulk)

```sql
let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

try {
    let qur = "INSERT INTO user (id, username, email, password) VALUES ?";
    let data = [];
    for (let i = 1; i <= 100; i++) {
        data.push(getRandomUser()); // 100 fake users
    }
    connection.query(qur, [data], (err, result) => {
        if (err) return err;
        console.log(result);
        console.log("Query: ", qur);
        console.log("Data 2: ", data);
    })
} catch (error) {
    console.log(err);
}
```

- **Remember :** when you pass your data in *`connection.query`* which is a collection of array then pass variable into a array.

---

## Routing With Database

### Home Route and Add Template

- ***home.ejs***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page </title>
</head>
<body>
    <!-- We use ejs template -->
    <h2>The total number of user are : <%= count %></h2>
    <button>Join us Today!</button>
</body>
</html>
```

- ***index.js***

```javascript
const uuid = require('uuid');
const ejs = require('ejs');
const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("Welcome to home page!!");
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            console.log(result[0]);
            console.log(result[0]["count(*)"]);
            // res.send("Success!!");
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (error) {
        console.log(error);
        res.send("Some error in DB");
    }
});

app.listen(port, () => {
    console.log(`Server start runing at port ${port}`);
});
```

- You should restart the server again and again and clear the table *`user`* by runing sql file with proper commands.

- ***schema.sql***

```sql
-- TRUNCATE TABLE user;

SELECT count(*) FROM user;

-- INSERT INTO user VALUES ("96", "_Abhishek", "abhishek@gmail.com", "kshg985$_!kjshfk");

-- INSERT INTO user VALUES ("123b", "123b", "abc@gmail.comb", "kshg985$_!kjshfk");

DELETE FROM user
WHERE id = "123b"; 

DELETE FROM user
WHERE id = "123c"; 
```

- Make Comment and Uncomment as your requirement to do operations and to solve getting errors.

### Show Route

- ***showusers.ejs***

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show Route </title>
    <style>
        table,
        td,
        th {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <h2>All Users</h2>
    <table>
        <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Username</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        <% for (const user of users) { %>
            <tr>
                <td>
                    <%= user.id %>
                </td>
                <td>
                    <%= user.email %>
                </td>
                <td>
                    <%= user.username %>
                </td>
                <td>
                    <form action="/user/<%= user.id %>/edit" method="get">
                        <button>Edit username</button>
                    </form>
                </td>
                <td>
                    <form action="/user/<%= user.id %>/delete?_method=DELETE" method="post">
                        <button>Delete user</button>
                    </form>
                </td>
            </tr>
        <% } %>
    </table>
</body>

</html>
```

- ***index.js***

```javascript
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            console.log(users);
            // res.send(users);
            res.render("showusers.ejs", { users });
        })
    } catch (error) {
        console.log(error);
        res.send("Some error in DB");
    }
});
```

---

## EDIT ROUTE

- ***edit.ejs***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Username</title>
</head>
<body>
    <h2>You are about to edit this user : <%= user.email %></h2>
    <form action="/user/<%= user.id %>?_method=PATCH" method="post">
        <textarea name="username" id="username">
            <%= user.username %>
        </textarea> <br>
        <input type="password" name="password" id="password" placeholder="Enter password">
        <button>Edit</button>
    </form>
</body>
</html>
```

- ***index.js***

```javascript
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let q = `SELECT * FROM user WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
    // res.render("edit.ejs");
});
```

---

## Update Route

- ***index.js***

```javascript
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username: newUsername, password: formPass } = req.body;
    // console.log(id);
    let q = `SELECT * FROM user WHERE id=?`;
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            // console.log(result);
            let user = result[0];
            if (user.password !== formPass) {
                res.send("Wrong password");
            } else {
                let q2 = `UPDATE user SET username=? WHERE id=?`;
                connection.query(q2, [newUsername, id], (err, result) => {
                    if (err) throw err;
                    // res.send(result);
                    res.redirect("/user");
                });
            }
            // res.send(user);
        });
    } catch (error) {
        console.log(error);
        res.send("Some error in DB");
    }
    // res.send("Updated");
});
```
