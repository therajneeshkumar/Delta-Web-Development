let n = 5;

for (let i = 0; i < n; i++) {
    console.log("Hello, ", i);
}

console.log("Bye!\n");

// console.log('process.argv :>> ', process.argv);

let args = process.argv;

/* node script.js abhishek pranjal rohit amit aman */
for (let i = 2; i < args.length; i++) {
    console.log("Heloo to ", args[i]);
}
console.log(args);
console.log(typeof args);

// const math = require("./maths");    // From package.json 
// import math from "./maths.js";    // From module 

// console.log(math);
// console.log("math.sum(2, 4) :", math.sum(2, 4));
// console.log("math.PI :", math.PI);
// console.log("math.g :", math.g);

/* require directory */
// const fruits = require("./fruits");
import fruits from "./fruits/index.js";

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0].name);

// const name = require("./FigletDir");
import "./FigletDir/index.js";

// figlet("Saloni", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

import { subt, powr, G } from "./maths.js";

console.log("subt(5, 2) :", subt(5, 2));

import { generate } from "random-words";

console.log(generate());