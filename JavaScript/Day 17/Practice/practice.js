const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter the number, you want table of that number : "));

for (let i=1; i<=10; i++) {
    console.log(`${number} * ${i} = ${number*i}`);
} 

console.log('Using number in loop conditions: ');
for (let i=number; i<=number*10; i=i+number) {
    console.log(i);
}

/* Favorite Movie */
console.log("Favorite Movie: ");
let favMovie = "Harry Potter";
let guess = prompt("Enter the my favorite movie name &  type 'quit' if you want exit: ");
// while ((guess!=favMovie) && (guess!="quit")) {
while ((guess!=favMovie)) {
    if (guess == "quit") {
        console.log("You Quit");
        break;
    }
    console.log("Wrong Guess!");
    guess = prompt("Enter the name again: ");
}

if (guess == favMovie) {
    console.log("Congrats!");
}
// else {
//     console.log("You Quit");
// }