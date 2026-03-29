/* Axios */

let url = "https://catfact.ninja/fact";

/* Using fetch method */
// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (err) {
//         console.log("error :- ", err);
//     }
//     console.log("Apna College");
// }

// getFacts();

/* Using Axios */

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log("error :- ", err);
        return "No Fact Found";
    }
}

let btn = document.querySelector('button');
btn.addEventListener("click", async () => {
    let fact = await getFacts();    // If we call without using async/await. It returns a promise.
    console.log(fact);
    document.querySelector('#result').innerText = fact;
});

/* Dog Picture API */
let dogURL = "https://dog.ceo/api/breeds/image/random";
let dogBtn = document.querySelector('#btn');

dogBtn.addEventListener("click", async () => {
    let link = await getImage();
    console.log(link);
    document.querySelector('#image').setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(dogURL);
        // console.log(res);
        return res.data.message;
    } catch (err) {
        // console.log(err);
        return "No Image Found";
    }
}

/* Sending Headers with API requests */
const jokeURL = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let joke = await axios.get(jokeURL, config);
        console.log(joke.data);
    } catch (error) {
        return "No Picture Found"
    }
}

getJokes();

/* Updating Query String */
let _url = "http://universities.hipolabs.com/search?name=";
// let country = "nepal";

async function getColleges(country) {
    try {
        let res = await axios.get(_url + country);
        // console.log(res.data);
        return res.data;
    } catch (err) {
        console.log("Error :", err);
        return [];
    }
}

let searchBtn = document.querySelector('#search');

searchBtn.addEventListener("click", async () => {
    let country = document.querySelector('input');
    // console.log(country.value);

    let collArr = await getColleges(country.value);
    // console.log(collArr);
    showColleges(collArr);
    country.value = '';
});

function showColleges(collArr) {
    let ul = document.querySelector('#list');
    ul.innerText = '';
    for (const college of collArr) {
        console.log(college.name);
        let item = document.createElement('li');
        item.innerText = college.name;
        ul.appendChild(item);
    }
}