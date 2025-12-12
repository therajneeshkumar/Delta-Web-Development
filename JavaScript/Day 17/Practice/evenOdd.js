console.log("Print all Odd numbers (1 to 15): ");
console.log("using for loop and if condition:");
for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);     //complexity = O(n)
    }
}
console.log("using updation codition in for loop: ");
for (let i=1; i<=15; i = i+2){
    console.log(i);         //complexity = O(1)
}

console.log("Print all even numbers (1 to 15): ");
console.log("Forward: ");
for (let i=2; i<=10; i = i+2){
    console.log(i);
}

console.log("Backward");
for (let i=10; i>=2; i=i-2) {
    console.log(i);
}