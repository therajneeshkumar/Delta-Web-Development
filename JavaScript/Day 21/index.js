let arr = [1,2,3,4,5];

/* using forEach() method */
let print = function(el) {
    console.log(el);
}
arr.forEach(print);

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function (el) {
    console.log(el);
});

let students = [
    {
        name : "aman",
        marks : 95
    },
    {
        name : "sharadha",
        marks : 94.4
    },
    {
        name : "rajat",
        marks : 92
    },
];

students.forEach((student) => {
    // console.log(student);
    console.log(student.marks);
});

/* Using map() method */

let num = [2, 3, 4, 5, 6];
let double = num.map((number) => {
    // return number * 2; 
    return number * number; 
});
console.log(double);

let gpa = students.map((el) => {
    return Number((el.marks / 10).toFixed(2));
});

console.log(gpa);

/* Using filter() method */

let numbers = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11, 23]; 

let evenNum = numbers.filter((el) => {
    // return el % 2 == 0;  // Even
    // return el % 2 != 0;     //Odd
    return el < 7;
});
console.log(evenNum);

/* Using every() method */

let nums = [2, 4, 6, 8, 9];
let ans = nums.every((el) => {
    el%2==0;
    return el%2==0;
    // both statements are valid. 
});
console.log(ans);

/* Using some() method */
console.log(nums.some((el) => el%2!=0));

/* Using reduce() method */

let res = numbers.reduce((acc, el) => acc + el);
console.log(res);

/* Maximum in Array */

// let max = -1;
// for (let i = 0; i < numbers.length; i++) {
//     if(max < numbers[i]) {
//         max = numbers[i];
//     }
// }
// console.log(max);

let max = numbers.reduce((acc, el) => {
    // if (acc < el) {
    //     acc = el;
    // }
    // return acc
    if (acc < el) {
        return el;
    } else {
        return acc;
    }
});
console.log(max);

/* Default Parameter */
function sum(a, b=3) {
    return a + b;
}
console.log('sum(2) :>> ', sum(2));
console.log('sum(2, 5) :>> ', sum(2, 5));

/* Spread */

console.log('...numbers :>> ', ...numbers);
console.log("Math.min(...numbers) :>>", Math.min(...numbers));
console.log('..."Apna College" :>> ', ..."Apna College");

/* Spread (Array Literal) */
let sarr = [1, 2, 3, 4, 5];
let newsarr = [...sarr];
newsarr.push(6);
console.log('sarr :>> ', sarr);
console.log('newsarr :>> ', newsarr);

let chars = [..."hello"];
console.log('chars :>> ', chars);

let even = [2, 4, 6, 8, 10];
let odd = [1, 3, 5, 7, 9];
let evenOdd = [...odd, ...even];
console.log('evenOdd :>> ', evenOdd);

/* Spread (Object Literal) */

const data = {
    email : "ironman@gmail.com",
    password : "abcd",
}
let dataCopy = {...data, id : 295, country : "India"};
console.log('data :>> ', data);
console.log('dataCopy :>> ', dataCopy);

let evenObj = {...even};
console.log('evenObj :>> ', evenObj);

let charObj = {..."abhishek"};
console.log('charObj :>> ', charObj);

/* Rest */

function numSum(...args) {
    for (let i=0; i<args.length; i++) {
        console.log("You gave us :", args[i]);
    }
}
numSum(1,2,3,4);

function min(a,b,c,d) {
    console.log(arguments); // arguments are a collection. Array methods are not work for the arguments.
    console.log(arguments.length);  // arguments length is depand on the functions recieving paraments.
    // arguments.push(1);
    arguments[4] = 5;
}
min(1,2,3,4);

function add(msg, ...args) {
    // return arguments.reduce((sum, el) => sum + el); // It doesn't work bcz arguments not works as array.
    console.log(msg);
    return args.reduce((sum, el) => sum + el);
}
console.log(add("Sum",1,2,3,4,6,7,8));

/* Destructuring */
let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "uvw", "pqr"];
let [winner, runerup, secondRunnerup, ...rest] = names;
console.log(winner, runerup, secondRunnerup);
console.log(rest);

/* Destructuring (Objects) */

const studentObject = {
    name : "karan",
    age : 14,
    class : 9,
    subjects : ["Hindi", "English", "Math", "Science", "History"],
    username : "karan@123",
    password : "abcd"
}

// let username = studentObject.username;
// let password = studentObject.password;

let {username : user, password, city : place="Mumbai"} = studentObject;
console.log(user);
console.log(password);
console.log(place);