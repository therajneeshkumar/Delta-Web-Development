/* Question 1 */ 
// Delete all occurencesof element 'num' in given array

const prompt = require('prompt-sync')();

let arr = [1, 2, 3, 4, 5, 6, 2, 3];

let num = prompt("Enter a number you want to delete: ");

for (let i=0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

/* Question 2 : To find the number of digits in a given number */ 

let number = prompt("Enter a number : ");
console.log(`The number of digits in ${number} is ${number.length}`);

/* Question 3 : T \o find the sum of digits in a number */ 

let nums = prompt("Enter a number to find the sum of all digits : ");
let sum = 0;
// for (let i=0; i < nums.length; i++) {
//     sum += parseInt(nums[i])
// }

for (element of nums) {
    sum += parseInt(element) 
}
console.log(sum);

/* Question 4 : Factorial of a number n */ 

let n = prompt("Enter a number to find factorial : ")
if (n == 0){
    console.log(`The factorial of ${n} is 1`);
} else {
    let fact = 1;
    for (let i=1; i <= n; i++) {
        fact *= i
    }
    console.log(`The factorial of ${n} is ${fact}`);
}

/* Question 5 : Find the largest number in an array with only positive numbers */ 

let arrs = [2, 5, 10, 4, 2, 7, 1, 9];

let largest = 0;

for (let i = 0; i < arrs.length; i++) {
    if (largest < arrs[i]) {
        largest = arrs[i];
    }
}

console.log(`the largest number in [${arrs}] is ${largest}`);