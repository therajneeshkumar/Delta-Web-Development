# Miscellaneous Topics

## GET & POST Request

### GET

- Used to GET some **response**.
- Data sent in query strings (limited, string data & visible in URL).
- Used when you want to get data from **Database**.

```html
<form action="/register" method="get">
    <input type="text" name="username" id="user" placeholder="enter username">
    <input type="password" name="password" id="pass" placeholder="enter password">
    <button>Submit</button>
</form>
```

  > **Note :** In ***get** method, the data send with the url.  
  > For Example : *`/register?username=sgsgg&password=6352`*

### POST

- Used to POST something (for Create / Write/ Update).
- Data sent via request body (any type of data).
- Used when you want to get data from **website**.

- **FRONTEND/index.html**

```html
<form action="/register" method="post">
    <input type="text" name="username" id="user" placeholder="enter username">
    <input type="password" name="password" id="pass" placeholder="enter password">
    <button>Submit</button>
</form>
```

  > **Note :** In ***post** method, the data is not send with the url. Instead of this, Data send by the request.  
  > For Example : *`/register`*

- **BACKEND/index.js**

```javascript
    app.get("/register", (req, res) => {
        let  {username, password} = req.query;
        res.send(`Standard GET response. Welcome ${username}!`);
    });

    app.post("/register", (req, res) => {
        res.send("Standard POST response");
    });
```

  > To send the responses from frontend to backend, we just change the action path to *`http://localhost:8080/register`*.

---

## Handling POST Request

- Set up POST request route  to get some response.
- Parse POST request data.

- **BACKEND/index.js**

```javascript
    /* Both are middleware */
    app.use(express.urlencoded({ extended : true }));   // It encoded the url to get data.
    app.use(express.json());    // It encoded the json data, send by the post method.

    /* Handling POST method */
    app.post("/register", (req, res) => {
        let {username, password} = req.body;
        res.send(`Standard POST response. Welcome ${username}!!`);
    });
```

- If we not use middleware the we get **undefined** from **`req.body`**, which contains the send data by post method, because by default it can't read any type of data which is comming through POST method.
- **Varibale** name in **post()** method and **key** of **JSON** data must be same (i.e. variableName == key).

---

## Revisiting JS (OOPS)

- **Object Oriented Programming**
- To structure our code.
  - prototypes
  - New Operator
  - Constructors
  - Classes
  - Keywords (extends, super)

---

## Object Prototypes

- Prototypes are the mechanism by which JavaScript objects inherit features from one another.
- It is like a single **template object** that all objects inherit methods and properties from another having their own copy.
- **`arr.__proto__(reference)`**
- **`Array.prototype(actual object1)`**
- **`String.prototype`**

- > Every object in JavaScript has a bulit-in property, which is called its **prototype**. This prototye is **itself an object**, so the prototype will have its own prototype, making what's called **prototype chain**. The chain ends when we reach a prototype that has **`null`** for its own prototype.

---

## Factory Functions

- A function that create objects.

```javascript
function personMaker(name, age) {
    const person = {
        name : name,
        age : age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        }
    }

    return person;
}

let p1 = personMaker("adam", 25);   // create a copy
console.log(p1);
console.log(p1.talk());

let p2 = personMaker("anshul", 20); // create a copy
console.log(p2);
console.log(p2.talk());

console.log(p1.talk === p2.talk);   // Returns false
```

- It has a major **disadvantage** that when we create an object using factory function then Every object has contains their own copy.

---

## New Operator

- The **`new`** operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

```javascript
/* Constructor : Special functions, doesn't return anything & Start with capital letter */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

/* Instance : a new object which is created by using constructor. p1 & p2 are instance */
let p1 = new Person("Aditya" , 18);
let p2 = new Person("Anjali" , 16);

console.log(p1.talk === p2.talk);   // Returns true bcz both are not individual objects properties but both are the porototype's properties.

console.log(p1);
console.log(p2);
```

### Constructor

- Constructor is a special function. It doesn't return anything & Start with capital letter.
- A class or function that specifies the type of the object instance.

### Instance

- Instance is a new object which is created by using constructor.

---

## Classes

- Classes are a **template** for creating objects. And start with capital letter.
- The **constructor** method is a special method of a class for creating and initializing an object instance of that class.

```javascript
class PersonMakers {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    /* create a prototype without using prototype property */
    talk () {
        console.log(`Hi, My name is ${this.name}`);
    }
}

let p3 = new PersonMakers("Rajan", 45);
let p4 = new PersonMakers("Shuhali", 40);

console.log(p3);
console.log(p4);

console.log('p3.talk === p4.talk :', p3.talk === p4.talk);
```

---

## Inheritance

- Inheritance is a mechanism that allows us to create new classes on the basis of already exsiting classes.
- **Child class** inherits all ***properties and methods*** from **Parent class**.

- ***Before Inheritance***

```javascript
/* Student Class */
class Student {
    constructor (name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    talk () {
        console.log(`Hi, I am ${this.name}`);
    }
}

let s1 =new Student("adam", 25, 95);
console.log(s1);

/* Teacher Class */
class Teacher {
    constructor (name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    talk () {
        console.log(`Hi, I am ${this.name}`);
    }
}

let t1 =new Teacher("sujal", 32, "History");
console.log(t1);
```

- ***After Inheritance***

```javascript
/* Person Class : Parent/Base Class*/
class Person {
    constructor (name, age) {
        this.name = name, 
        this.age = age
    }

    talk() {
        // console.log(`Hi, I am ${this.name}`);
        return `Hi, I am ${this.name}`;
    }
}

class Student extends Person {
    constructor (name, age, marks) {
        super(name, age);   // Parent class constructor is being called.
        this.marks = marks;
    }
}

let s1 =new Student("adam", 25, 95);
console.log(s1);
console.log("s1.name :", s1.name);
console.log("s1.age :", s1.age);
console.log("s1.marks :", s1.marks);
console.log("s1.talk() :", s1.talk());

class Teacher extends Person {
    constructor (name, age, subject) {
        super(name, age);   // Parent class constructor is being called.
        this.subject = subject;
    }
}

let t1 =new Teacher("sujal", 32, "History");
console.log(t1);
console.log("t1.name :", t1.name);
console.log("t1.age :", t1.age);
console.log("t1.subject :", t1.subject);
console.log("t1.talk() :", t1.talk());
```

### Extends & Super Keyword

- **`extends`** keyword used to inherit properties form another class (must be parent class).
- **`super`** keyword refer to the parent class constructor and it used inside the child class constructor's.

---
