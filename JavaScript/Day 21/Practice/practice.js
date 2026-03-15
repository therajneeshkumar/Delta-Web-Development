/* Check if all numbers in our array are multiples of 10 or not. */

let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let res = nums.every((num) => {
    return num % 10 == 0;
});

if (res) {
    console.log("All numbers are multiple of 10");
} else {
    console.log("All numbers are not multiple of 10");
}


/* Create a function to find the min number in an array. */

let numbers = [1, 21, 3, 4, 7, 8, 2, 9, 10, 12, 11, 23];

let minNum = function (num) {
    let min = Infinity;
    for (let i=0; i<num.length; i++) {
        if (min > num[i]) {
            min = num[i];
        }
    }
    return min;
}
console.log("Minimum number is : ", minNum(numbers));