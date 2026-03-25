let obj = {
    a: undefined
};

/* JSON : key is always a string and value should not be 'undefined' */

let jsonRes = '{"fact":"The first official cat show in the UK was organised at Crystal Palace in 1871.","length":78}';
console.log(jsonRes);
console.log(jsonRes.fact);  // Return undefined bcz it is not present in JSON format.

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

// JSON.stringify()

let student = {
    name: "abhishek",
    marks: 95
};

let stdJson = JSON.stringify(student);
console.log(stdJson);

/* 
    Testing API Tools :
    1. Hoppscoth
    2. Postman 
*/


/* First API request using Fetch : fetch(url) */

// let url = "https://catfact.ninja/fact";
// fetch(url);

// fetch(url).then((res) => {
//     // console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 :", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 :", data2.fact);
// })
// .catch((err) => {
//     console.log(err);
// });

console.log("I am Happy");

/* Using fatch with aync/await */

// let url = "https://catfact.ninja/fact2";
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch (err) {
        console.log("error :- ", err);
    }
    console.log("Apna College");
}

getFacts();