/* Async Function : Return a Promise */

async function greet() {
    // abc.abc();
    throw "404 page not found";
    return "Hello";
}

greet()
    .then((result) => {
        console.log("Promise Resolved");
        console.log("result was", result);
    })
    .catch((err) => {
        console.log("Promise Rejected with err :", err);
    });

let demo = async () => { return 5; };
console.log(demo());

/* await keyword */

function getNum() {
    // console.log(5);
    /* Use setTimeout to make asyncronous function */
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        });
    }, 1000);
}

async function demoNum() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

/* Minimize the color change code using async/await */

let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 4) {
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("Successfully Colors Changed.");
        }, delay);
    });
}

// changeColor('red', 1000)
// .then((result) => {
//     console.log("Red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("Orange color was completed");
//     return changeColor("green", 1000);
// })
// .then(() => {
//     console.log("Green color was completed");
//     return changeColor("yellow", 1000);
// })
// .then(() => {
//     console.log("Yellow color was completed");
//     return changeColor("blue", 1000);
// })
// .then((result) => {
//     console.log("Blue color was completed");
//     console.log(result);
// });

async function colors() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
    } catch (error) {
        console.log("Error Caught");
        console.log(error);
    }

    let a = 5;
    console.log(a);
    console.log(`new number = ${a + 3}`);
}

colors();