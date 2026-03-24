/* Old Code in Script.js file */
let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) { 
//     setTimeout(() => {
//         h1.style.color = color;
//         console.log(`${color} Color Changed`);
//         if (nextColorChange)         nextColorChange();
//     }, delay);
// }

// /* Callbacks nesting -> callback hell : isse bachne ke liye Promices & async/await ka use krte hai */
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () =>{
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });


/* Refactoring old code using Promises */

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Successfully Colors Changed.");
        }, delay);
    });
}

changeColor('red', 1000)
.then((result) => {
    console.log("Red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("Orange color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("Green color was completed");
    return changeColor("yellow", 1000);
})
.then(() => {
    console.log("Yellow color was completed");
    return changeColor("blue", 1000);
})
.then((result) => {
    console.log("Blue color was completed");
    console.log(result);
});