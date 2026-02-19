/* Write an arrow function that returns the square of a number 'n' */

const square = n => n ** 2;
console.log(square(6));
console.log(square(9));
console.log(square(12));

/* Write a function that prints "Hello World" 5 times at interval of 2s each */

function printHello() {
    let id = setInterval(() => {
        console.log("Hello World");
    }, 2000);

    setTimeout(() => {
        clearInterval(id);
        console.log("Clear Interval run");
    }, 12000);
}

printHello();