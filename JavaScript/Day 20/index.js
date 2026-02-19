/* this keyword */

const student = {
    name : "Abhishek",
    age : 23,
    eng : 95,
    math : 97,
    phy : 93,
    getAvg() {
        console.log(this);
        // let avg = (eng + math + phy) / 3;  // can't access any variable inside an object. Throw not defined error.
        let newAvg = (this.eng + this.math + this.phy);
        // console.log(newAvg);
        console.log(`${this.name} got avg marks = ${newAvg}`);
    }
}

function getAvgs() {
    return this;
}

console.log('getAvgs() :>> ', getAvgs());

/* try & catch */

console.log("hello0");
console.log("hello1");
// let a = 5;
try {
    console.log(a);
} catch (error) {
    console.log("Caught an error.. a is not defined.");
    console.log(error);
}
console.log("hello2");
console.log("hello3");
console.log("hello4");

/* Arrow Function */

const sum = (a, b) => {
    console.log(a+b);
};

sum(2, 5);

const cube = n => {
    return n * n * n;
};

console.log(`cube of 6 :>> ${cube(6)}`);

const pow = (a, b) => {
    return a ** b;
};

console.log(`The value of 3 power 5 is :>>${pow(3,5)}`);

/* Implicit Return arrow function */

const mul = (a, b) => a * b;
console.log(`Multiplication of 23 and 4 :>> ${mul(23, 4)}`);

/* setTimeout */

console.log("Hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000);

console.log("Welcome to");

/* setInterval */

console.log("Hi there!");

let id = setInterval(() => {
    console.log("Apna College Youtube Channel.");
}, 2000);

console.log("Welcome to");
console.log('id :>> ', id);

let id2 = setInterval(() => {
    console.log("Hello JavaScript!!!");
}, 3000);

console.log('id2 :>> ', id2);

clearInterval(id);
clearInterval(id2);

/* this with arrow function */

const std = {
    name : "aman",
    marks : 95,
    prop : this,    // Global Scope
    getName : function () {
        console.log(this);
        return this.name;
    },
    getMarks : () => {
        console.log(this);  // Parent Scope -> window
        return this.marks;
    },
    getInfo1 : function() {
        setTimeout(() => {
            console.log("this in setTimeout with arrow function.");
            console.log(this);  // student object
        }, 2000);
    } ,
    getInfo2 : function() {
        setTimeout(function() {
            console.log("this in setTimeout with traditional function.");
            console.log(this);  // window object
        }, 2000);
    },
}

const a = 5; // Global Scope

console.log(std);
console.log('std.getName() :>>', std.getName());
console.log('std.getMarks() :>>', std.getMarks());

console.log('std.getInfo1() :>> ', std.getInfo1());
console.log('std.getInfo2() :>> ', std.getInfo2());