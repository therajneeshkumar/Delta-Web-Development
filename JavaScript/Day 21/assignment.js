/* Question 1 */
const squareSum = (arr) => {
    let sum = arr.reduce((sum, el) => sum + (el * el), 0);
    return sum / arr.length;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`The average of [${array}] is ${squareSum(array)}`);

/* Question 2 */
let numbers = [2, 5, 7, 9, 6, 23, 15, 17];
const numPlus = numbers.map((num) => {
    return num + 5;
});

console.log(`After plus 5, the array [${numbers}] can be [${numPlus}]`);

/* Question 3 */
let words = ['rajneesh', 'abhishek', 'sameer', 'avnish', 'aman', 'rohit', 'pranjal', 'amit'];
let upperWords = words.map((word) => {
    return word.toUpperCase();
});

console.log(`The Uppercase array is [${upperWords} of this [${words}]]`);

/* Question 4 */
const doubleAndReturnArgs = (numbers, ...rest) => [...numbers, ...rest.map((num) => {
    return num * 2;
})];

console.log("doubleAndReturnArgs(array, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30) :>> ", doubleAndReturnArgs(array, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30));

/* Question 5 */
const mergeObjects = (firstObj, secondObj) => {
    return { ...firstObj, ...secondObj };
}

let obj = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'x',
    10: 'y',
    11: 'z'
};
let objs = {
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P'
}

console.log('obj, objs :>> ', obj, objs);
console.log('mergeObjects(obj, objs) :>> ', mergeObjects(obj, objs));