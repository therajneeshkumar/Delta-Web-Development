function hello() {
    console.log("hello");
}

// hello();

function printName() {
    console.log("Abhishek Gangwar");
}

// printName();

function print1to5() {
    for (let i=1; i<=5; i++) {
        console.log(i);
    }
}

// print1to5();

function isAdult() {
    let age = 16;
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}

// isAdult();

/* Function with arguments / parameters / inputs */

function printInfo(name, age) {
    console.log(`${name}'s age is ${age} years.`);
}

// printInfo("Rohit", 20);

function sum(a, b) {
    console.log(a+b);
}

// sum(1, 2);
// sum(4, 5);
// sum(7, 8);

function sumWithReturn(a, b) {
    return a+b;
}

console.log(sumWithReturn(3, 4));
console.log(sumWithReturn(sumWithReturn(1,2),3));

function isAdultWithReturn(age) {
    if (age>=18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
    console.log("Bye, Bye");
}

console.log(isAdultWithReturn(25));
console.log(isAdultWithReturn(16));