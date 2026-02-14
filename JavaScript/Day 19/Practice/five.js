/* Function that returns the sum of numbers from 1 to n */

function getSum(num) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(10));