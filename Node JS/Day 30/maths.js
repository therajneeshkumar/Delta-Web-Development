/* For require */
// const sum = (a, b) => a+b;
// const mul = (a, b) => a*b;

// const g = 9.8;
// const PI = 3.14;

/* First way to export */
// module.exports = "Hello";

/* Second way to export */
// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI,
// }
// module.exports = obj;

/* Third way to export */
// module.exports = {
//     sum : sum,
//     mul : mul,
//     g : g,
//     PI : PI,
// };

/* Fourth way to export */
// module.exports.sum = (a, b) => a+b;
// module.exports.mul = (a, b) => a*b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

/* Fifth way to export */
// exports.sum = (a, b) => a+b;
// exports.mul = (a, b) => a*b;
// exports.g = 9.8;
// exports.PI = 3.14;


/* For import */
export const subt = (a, b) => a-b;
export const powr = (a, b) => a**b;
export const G = 10;