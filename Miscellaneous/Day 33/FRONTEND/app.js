const stu1 = {
    name : "aman",
    age : 22,
    marks :89,
    getMarks : function () {
        return this.marks;
    }
};

const stu2 = {
    name : "rohit",
    age : 21,
    marks :85,
    getMarks : function () {
        return this.marks;
    }
};

const stu3 = {
    name : "rajneesh",
    age : 23,
    marks :95,
    getMarks : function () {
        return this.marks;
    }
};

let arr1 = [1, 2, 3];
arr1.sayHello = () => {
    console.log("Hello!, I am arr1");
};

console.log(arr1.push(4));
arr1.sayHello();
console.log(arr1);

let arr2 = [5, 6, 7];
console.log(arr2);
arr2.sayHello = () => {
    console.log("Hello!, I am arr2");
};

console.log(arr1.__proto__);
console.log(arr1.__proto__.push = (n) => { console.log("Pushing number", n); });
console.log(arr1.push(56));

console.log(Array.prototype);
console.log(String.prototype);

console.log("arr1.sayHello === arr2.sayHello :", arr1.sayHello === arr2.sayHello);
console.log("'abc'.toUpperCase === 'xyz'.toUpperCase :", "abc".toUpperCase === "xyz".toUpperCase);

/* Factory Function */

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

// let p1 = personMaker("adam", 25);
// console.log(p1);
// console.log(p1.talk());

// let p2 = personMaker("anshul", 20);
// console.log(p2);
// console.log(p2.talk());

// console.log(p1.talk === p2.talk);   // Returns false

/* Constructor : New Operator */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

let p1 = new Person("Aditya" , 18);
let p2 = new Person("Anjali" , 16);

console.log(p1);
console.log(p2);

console.log("p1.talk === p2.talk :", p1.talk === p2.talk);   // Returns true

/* Classes in JS */

class PersonMakers {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    talk () {
        console.log(`Hi, My name is ${this.name}`);
    }
}

let p3 = new PersonMakers("Rajan", 45);
let p4 = new PersonMakers("Shuhali", 40);

console.log(p3);
console.log(p4);

console.log('p3.talk === p4.talk :', p3.talk === p4.talk);

/* Inheritance */

class CommonPerson {
    constructor (name, age) {
        console.log("CommonPerson Class Constructor");
        this.name = name,
        this.age = age
    }
    talk() {
        return `Hi, I am ${this.name}`;
    }
}

class Student extends CommonPerson{
    constructor (name, age, marks) {
        // this.name = name;
        // this.age = age;
        console.log("Student Class Constructor");
        super(name, age);
        this.marks = marks;
    }

    // talk () {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}

let s1 =new Student("adam", 25, 95);
console.log(s1);
console.log("s1.name :", s1.name);
console.log("s1.age :", s1.age);
console.log("s1.marks :", s1.marks);
console.log("s1.talk() :", s1.talk());

class Teacher extends CommonPerson{
    constructor (name, age, subject) {
        // this.name = name;
        // this.age = age;
        console.log("Teacher Class Constructor");
        super(name, age);
        this.subject = subject;
    }

    // talk () {
    //     console.log(`Hi, I am ${this.name}`);
    // }
}

let t1 =new Teacher("sujal", 32, "History");
console.log(t1);
console.log("t1.name :", t1.name);
console.log("t1.age :", t1.age);
console.log("t1.subject :", t1.subject);
console.log("t1.talk() :", t1.talk());

/* Another Exapmle of Inheritance */

class Mammal {  // Parent/Base Class
    constructor (name) {
        this.name = name,
        this.type = "warm-blooded"
    }

    eat() {
        return "I am eating";
    }
}

class Dog extends Mammal {  // Child Class
    constructor (name) {
        super(name);
    }

    bark() {
        return "wooff...";
    }

    /* method overriding */
    eat() {
        return "Dog is eating";
    }
}

class Cat extends Mammal {  // Child Class
    constructor (name) {
        super(name);
    }

    meow() {
        return "meow...";
    }
}

let dog1 = new Dog("tuffie");
let cat1 = new Cat("miky");

console.log(dog1);
console.log(cat1);

console.log("dog1.eat() :", dog1.eat());
console.log("cat1.eat() :", cat1.eat());

console.log("dog1.bark() :", dog1.bark());
console.log("cat1.meow() :", cat1.meow());