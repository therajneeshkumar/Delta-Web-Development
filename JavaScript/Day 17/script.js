/*
    1. for loop
    2. Dry Run
    3. Odd Number 
    4. Even Number
    5. Infinite loop
    6. Multiplication Table
    7. Nested Loop
    8. While Loop
    9. Favorite Movie
    10. break Keyword
    11. Loops in Array
    12. Loops with nested Array
    13. for-of-loop
    14. Nested for-of-loop
    15. Todo App (Only JS)
*/

console.log("Using console.log: ");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

/* for loop */
console.log("Using for loop for forward run : ");
for(let i=1; i<=5; i++) {
    console.log(i);
}

console.log("Using for loop for backward run : ");
for(let i=10; i>=1; i = i-3) {
    console.log(i);
}

/* infinite loop */
console.log("Infinite Loop");
// for (let i=1; i>=0; i++) {
//     console.log(i);
// }

// for (let i=1; i<=5; i--) {
//     console.log(i);
// }

// for (let i=1; ; i++) {
//     console.log(i);
// }

/* Nested Loop */
console.log("Nested Loop: ");
for (let i=1; i<=3; i++) {
    console.log(`outer loop: ${i}`);
    for (let j=1; j<=3; j++){
        console.log(j);
    }
}

/* While Loop */
console.log("While Loop: ");
console.log("for forward: ");
var i=1;
while (i<=5) {
    console.log(i);
    i++;
}

console.log("for* backward: ");
var i=5;
while (i>=1) {
    console.log(i);
    i--;
}

/* break Keyword */
console.log("break Keyword: ");
let a = 1;
while(a<=5) {
    if (a==3) {
        break;
    }
    console.log(a);
    a++;
}

/* Loops in Array */
console.log("Loops in Array: ");
let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
fruits.push("pineapple");
for (let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

console.log("Backward: ");
for (let i=fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
}

/* Nested Loops with nested arrays */
console.log("Nested Loops wit nested arrays");
let heroes = [['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman', 'flash']];

console.log(heroes);
for (let i=0; i<heroes.length; i++) {
    console.log(`List #${i}`);
    for (let j=0; j<heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}

let students = [["ravi", 84], ["rajneesh", 100], ['"abhishek', 92]];
for (let i=0; i<students.length; i++) {
    console.log(`Info of student #${i+1}, "[${students[i]}]" ${students[i].length}`);
    for (j=0; j<students[i].length; j++) {
        console.log(students[i][j]);
    }
}

/* for-of-loop */
console.log("for-of-loop: ");
for (fal of fruits) {
    console.log(fal);
}
console.log("________________________");

for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}
console.log("________________________");

for (char of "Rajneesh Kumar") {
    console.log(char);
}

/* Nested for-of-loop */
console.log("Nested for-of-loop: ");
for (hero of heroes) {
    console.log(hero);
    for (actor of hero){
        console.log(actor);
    }
}