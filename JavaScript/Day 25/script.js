/* JS Call Stack */

function hello() { 
    console.log("Inside hello function");
    console.log("Hello");
}

function demo() { 
    console.log("Calling hello function");
    hello();
}

console.log("Calling Demo function");
demo();
console.log("Done, Bye!");

/* Visualizing the Call Stack */

function one() { 
    return 1;
}

function two() { 
    return one() + one();
}

function three() { 
    let ans = two() + one();
    console.log(ans);
}

three();

/* JS is Single Threaded */

// Synchronous nature
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log((a+b));

// Asynchronous nature
setTimeout(() => {
    console.log("Apna College");
}, 2000);

setTimeout(() => {
    console.log("Hello, World!!!");
}, 2000);
console.log("Hello...");

/* Callback Hell : Occured bcz of asynchronous nature of JS */

let h1 = document.querySelector('h1');

// setTimeout(() => {
//     h1.style.color = "red";
//     console.log("Red Color Changed!");
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
//     console.log("Orange Color Changed!");
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
//     console.log("Green Color Changed!");
// }, 3000);

// function changeColor(color, delay) { 
//     setTimeout(() => {
//         h1.style.color = color;
//         console.log(`${color} Color Changed`);
//     }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

function changeColor(color, delay, nextColorChange) { 
    setTimeout(() => {
        h1.style.color = color;
        console.log(`${color} Color Changed`);
        if (nextColorChange)         nextColorChange();
    }, delay);
}

/* Callbacks nesting -> callback hell : isse bachne ke liye Promices & async/await ka use krte hai */
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () =>{
                changeColor("blue", 1000);
            });
        });
    });
});

/* Promises */
// function saveToDb(data) { 
//     let internetspeed = Math.floor(Math.random() * 10 + 1);
//     if (internetspeed > 4) {
//         console.log("Your data was saved :", data);
//     } else {
//         console.log("weak connection. data not saved");
//     }
// }

// function saveToDb(data, success, failure) { 
//     let internetspeed = Math.floor(Math.random() * 10 + 1);
//     if (internetspeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

/* This code refers to 'callback hell' bcz of nesting callbacks */

// saveToDb("apna college", () =>{
//     console.log("Success: Your data was saved");
//     saveToDb("hello world", () => {
//         console.log("Success2: data2 saved");
//         saveToDb("Rajneeh Kumar", () => {
//             console.log("Success3: data2 saved");
//         }, () => {
//             console.log("Failure3: weak connection. Not Saved.");
//         });
//     }, () => {
//         console.log("Failure2: weak connection");
//     });
// }, () => {
//     console.log("Failure: weak connection. data not saved");
// });

/* Problem solve by 'Promises' by taking one parameter */
function saveToDb(data) { 
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 10 + 1);
        if (internetspeed > 4) {
            resolve("Success: data was saved");
        } else {
            reject("Failure: weak connection");
        }
    });
}

/* Optimize previous callbacks hell code */

// let request = saveToDb("apna college");     // request -> Promise Object
// request.then(() => {
//     console.log("Promise resolved.");
//     console.log(request);
// })
// .catch(() => {
//     console.log("Promise rejected");
//     console.log(request);
// })

// saveToDb("abhishek gangwar").then(() => {
//     console.log("Promise resolved.");
// })
// .catch(() => {
//     console.log("Promise rejected");
// })

/* Promise Chaining */

// saveToDb("abhishek gangwar").then(() => {
//     console.log("Promise resolved. data1 saved");
//     // saveToDb("apna college").then(() => {
//     //     console.log("data2 saved");
//     // });
//     return saveToDb("apna college");
// })
// .then(() => {
//     console.log("data2 saved. Promise2 resolved");
//     return saveToDb("future dark");
// })
// .then(() => {
//     console.log("data3 saved. Promise3 resolved");
// })
// .catch(() => {
//     console.log("Promise rejected");
// })

/* Results and Errors in Promises : by using parameter in then() catch() methods */ 

saveToDb("abhishek gangwar")
.then((result) => {
    console.log("Promise resolved. data1 saved");
    console.log("Result of Promise :", result);
    return saveToDb("apna college");
})
.then((result) => {
    console.log("data2 saved. Promise2 resolved");
    console.log("Result of Promise :", result);
    return saveToDb("future dark");
})
.then((result) => {
    console.log("data3 saved. Promise3 resolved");
    console.log("Result of Promise :", result);
})
.catch((result) => {
    console.log("Promise rejected");
    console.log("Error of Promise :", result);
})