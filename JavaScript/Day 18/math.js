//Math Properties

console.log("Math.PI :>>", Math.PI);
console.log('Math.E :>> ', Math.E);

// Math Methods

console.log('Math.abs(12) :>> ', Math.abs(12));
console.log('Math.abs(-12.5) :>> ', Math.abs(-12.5));
console.log('Math.pow(2,4) :>> ', Math.pow(2,4));
console.log('Math.pow(2,5) :>> ', Math.pow(2,5));
console.log('Math.floor(5) :>> ', Math.floor(5));
console.log('Math.floor(5.5) :>> ', Math.floor(5.5));   // Round the value to Nearest smallest Integer value.
console.log('Math.floor(5.99999) :>> ', Math.floor(5.99999));
console.log('Math.floor(-5) :>> ', Math.floor(-5));
console.log('Math.floor(-5.5) :>> ', Math.floor(-5.5));
console.log('Math.floor(-5.5) :>> ', Math.floor(-5.5));
console.log('Math.ceil(6) :>> ', Math.ceil(6)); // / Round the value to Nearest largest Integer value.
console.log('Math.ceil(6.5) :>> ', Math.ceil(6.5));
console.log('Math.ceil(6.00000001) :>> ', Math.ceil(6.00000001));
console.log('Math.ceil(-6.6) :>> ', Math.ceil(-6.6));
console.log('Math.round(7.4) :>> ', Math.round(7.4));
console.log('Math.round(7.8) :>> ', Math.round(7.8));
console.log('Math.random() :>> ', Math.random());   // Generate a random number between 0 and 1(exclude).

/* Random Integer */

let num = Math.random();
console.log(num);
num *= 10;
console.log(num);
num = Math.floor(num);
console.log(num);
num += 1;
console.log(num);

/*let randomNumber = (Math.random() * 10);
console.log(randomNumber);
console.log(Math.floor(randomNumber));
console.log(Math.round(randomNumber)); */
// let randomNumber = Math.round(Math.random() * 10) + 1;
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);