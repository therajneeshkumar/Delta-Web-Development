/* Question 1 */

let dice = Math.floor(Math.random() * 6) + 1;
console.log(`The number comes to the front dice is : ${dice}`);

/* Question 2 */

const car = {
    name : "BMW M5",
    model : "BMW M5 Competition",
    color : "M Isle of Man Green metallic"
}

console.log(car.name);

/*Question 3 */

const person = {
    name : "Rohit",
    age : 20,
    city : "Noida"
}

console.log(`Before Change : `, person);
person.city = "New York";
console.log(`After Change : `, person);
person.country = "United States";
console.log(`After over after Change : `, person);