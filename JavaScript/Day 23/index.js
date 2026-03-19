/* onEvent Property */
let btn = document.getElementById('btn');
console.dir(btn);

btn.onclick = function () {
    console.log("Button was clicked!");
}

let btns = document.querySelectorAll('.like');
console.log(btns);

// for (let btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         // console.log(btn);
//         console.log(`You entered the ${btn.innerText} button.`);
//     }
// }

function sayHello() {
    alert("Hello, dear!")
}

/* Event Listener */
for (const btn of btns) {
    // addEventListener('click', sayHello);
    // addEventListener('click', sayName);
    addEventListener('dblclick', function () {
        console.log('You double clicked me.');
    });
}

function sayName() {
    alert("Apna College");
}

/* Activity */

let activitybtn = document.querySelector('.activity button');

activitybtn.addEventListener('click', () => {
    let h3 = document.querySelector('h3');
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    h3.style.color = randomColor;
    console.log("Color Updated!!");

    let box = document.querySelector('.box');
    box.style.backgroundColor = randomColor;
})

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}

/* Event Listener on other elements */

let para = document.querySelector('p');

para.addEventListener('click', () => {
    console.log("Parah was clicked.");
});

let outerBox = document.querySelector('.outer');

outerBox.addEventListener('mouseenter', function() {
    console.log("Mouse inside box");
})

/* this keyword in event listener */

let thisBtn = document.querySelector('.thisbtn');
let thisboxh1 = document.querySelector('.thisbox h1');
let thisboxh3 = document.querySelector('.thisbox h3');
let thisboxp = document.querySelector('.thisbox p');
let thisboxbutton = document.querySelector('.thisbox button');

thisBtn.addEventListener('click', function () {
    console.log(this);
    // console.log(this.innerText);
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
}) 

function colorChange() {
    console.log(this.innerText);
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
}

thisboxh1.addEventListener('click', colorChange);
thisboxh3.addEventListener('click', colorChange);
thisboxp.addEventListener('click', colorChange);
thisboxbutton.addEventListener('click', colorChange);

/* keyboard Events */

let input = document.querySelector('.keyboard input');
// input.addEventListener('keypress', function (event) {
//     console.log("Key =", event.key);
//     console.log("code =", event.code);
//     console.log("Key was Pressed");
// });

// input.addEventListener('keyup', function () {
//     console.log("Key was released");
// });

input.addEventListener('keydown', function (event) {
    console.log("code =", event.code);  // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    if (event.code == "KeyU") {
        console.log("Character moves forward");
    } else if (event.code == "KeyD") {
        console.log("Character moves backward");
    } else if (event.code == "KeyL") {
        console.log("Character moves left");
    } else if (event.code == "KeyR") {
        console.log("Character moves right");
    }
});

/* Form Event */

let form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("Form Submitted");
    // let input = document.querySelector('#user');
    // let password = document.querySelector('#pass');
    // console.dir(input);
    // console.dir(input.value);

    // console.dir(form);
    // let input = this.elements[0];
    // let password = this.elements[1];
    // console.log("user :", user.value);
    // console.log("Password :", password.value);
    // alert(`Hi ${user.value}, your password is set to ${password.value}`);
});

/* change & input Event */

let user = document.querySelector('#user');

user.addEventListener("change", function () {
    console.log("Input changed");
    console.log("Final value =", this.value);
});

user.addEventListener("input", function () {
    console.log("Input event");
    console.log("Final value =", this.value);
});

let textInput = document.querySelector('#text');
let textPara = document.querySelector('#textPara');

textInput.addEventListener("input", function () {
    console.log(textInput.value);
    textPara.innerText = textInput.value;
});