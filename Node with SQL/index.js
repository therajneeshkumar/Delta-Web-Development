const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const uuid = require('uuid');
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const express = require('express');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Create the connection to database which is an object.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'deltaApp',
    // Use your database root password
    // Remove this password before upload
    password: 'sql2026',
});

try {
    // Used to make changes in database using the created connection
    /* connection.query('SQL_Query', 'callback_fxn') */
    // connection.query("SHOW TABLES", (err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    // })

    /* Pass query using a variable */
    let q = "SHOW TABLES";
    connection.query(q, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
    });
} catch (err) {
    console.log(err);
}

try {
    /* INSERT data using palceholder */
    let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
    let newuser = ["123", "123_newuser", "abc@gmail.com", "abc"];
    connection.query(q, newuser, (err, result) => {
        // if (err) throw err;
        console.log(result);    // Return undefined 
    });
} catch (err) {
    console.log(err);
}

try {
    /* When we want to add multiple users */
    let query = "INSERT INTO user (id, username, email, password) VALUES ?";
    let newusers = [
        ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
        ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
    ];
    connection.query(query, [newusers], (err, result) => {
        // if (err) throw err;
        console.log(result);    // Return undefined
    });
} catch (err) {
    console.log(err);
}

// connection.end();

// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }

// console.log(getRandomUser());

/* INSERT in Bulk */

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
        if (err) throw err;
        console.log(result);
    })
} catch (error) {
    console.log(err);
}

// connection.end();

/* HOME ROUTE */
app.get("/", (req, res) => {
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
    // res.send("Welcome to home page!!");
});

/* SHOW ROUTE */
app.get("/user", (req, res) => {
    // res.send("Success!!");
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

/* EDIT ROUTE */
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

/* Update Route */
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
                // user.username = newUsername;
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

/* Add new User */
app.post("/newuser", (req, res) => {
    res.render("newUser.ejs");
});

app.post("/user", (req, res) => {
    let id = faker.string.uuid();
    console.log(id);
    let { username, password, email } = req.body;
    console.log(username);
    console.log(password);
    console.log(email);
    let q = `INSERT INTO user VALUES (?, ?, ?, ?)`;
    try {
        connection.query(q, [id, username, email, password], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch (err) {
        console.log(err);
        res.send("Some error in DB");
    }
    // res.send(853)
});

/* Delete an existing user */
app.delete("/user/:id/delete", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let q = `DELETE FROM user WHERE id=?`
    try {
        connection.query(q, [id], (err, result) => {
            if (err) throw err;
            res.redirect("/user");
        });
    } catch (error) {
        console.log(error);
        res.send("Some error in DB");
    }
})

app.listen(port, () => {
    console.log(`Server start runing at port ${port}`);
});