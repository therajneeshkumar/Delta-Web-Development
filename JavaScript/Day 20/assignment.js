// const prompt = require('prompt-sync')();

/* Question 1 */

const arrayAverage = (arr) => {
    let sum = arr.reduce((acc, curnt) => 
        acc + curnt, 0
    );
    return (sum / arr.length).toFixed(2);
}

let eleNum = Number.parseInt(prompt("Enter total count in an array : "));

let array = [];
for (let i=0; i<eleNum; i++) {
    array.push(Number(prompt(`Enter ${i+1} Number : `)));
}

console.log(`The average of [${array}] is ${arrayAverage(array)}`);

/* Question 2 */

const isEven = (number) => {
    /*if (number & 1 == 1) {
        return 'Not Even';
        } else {
            return 'Even'
    }*/

    /*if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }*/

    // return number % 2 === 0 ? 'Even' : 'Not Even (Odd)';

    let evenOdd = {
        0: 'Even',
        1: 'Odd'
    }
    return evenOdd[number & 1];
}

let num = Number(prompt("Enter a number : "));
console.log(`The ${num} is ${isEven(num)}`);

/* Question 3 */

const object = {
    message: 'Hello, World!',
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

/* Is Question ka output "undefined" hai kyuki 'logMessage()' ka 'this' -> 'window object' ko refer kr rha hai. Aur window object me 'message' name ki koi property nhi hai */

/* 
    1. 'logMessage() { console.log(this.message); }' works as 'logMessage : function() { console.log(this.message); }'
    2. In 'object.logMessage' : the logMessage works as reference as a function, after runing the code it works like as function call 'logMessage();'
    3. The output of 'this' keyword is depend on the object's method call:
        1. If [object.logMessage()] then 'this' keyword refers to the same object and return the same object as output.
        2. If [object.logMessage] then 'this' keyword refers to the 'window object' and return the window object as output and also return 'undefined' if the property not exist.
*/

/* Question 4 */

let length = 4;
console.log(this);
function callback() {
    console.log(this.length);
};

const objects = {
    length : 5,
    method(callback) {
        callback();
    }
};

objects.method(callback, 1, 2);

/* Is Question ka output "0" hai kuyki length variable let keyword se define hai aur let keyword global property ko refer nhi krta hai */ 


/* Experiment of making length globally which are defined by the let and const keywords. */
// console.log(this);
// const length = 4;
// globalThis.length = length;
// console.log(this.length);