console.log(document);
console.dir(document);
console.dir(document.all);
console.dir(document.all[7]);
// console.dir(document.all[7].innerText = "Peter Pakar");

/* getElementById(id) */
document.getElementById('image');   // Returns null
const image = document.getElementById('mainImg');
console.log(image);
console.dir(image);

const para = document.getElementById('description');
console.log(para);
console.dir(para);

/* getElementsByClassName(class) */
const imageClass = document.getElementsByClassName('oldImg');
console.log(imageClass);
for (let i=0; i<imageClass.length; i++) {
    // console.dir(imageClass[i].src);
    // imageClass[i].src = "./assests/spider-man.png";
    console.log(`Value of image no. ${i} is changed`);
}

/* getElementByTagName(tag) */
const paragraphs = document.getElementsByTagName('P');
console.log(paragraphs);

/* querySelector(selector) */
console.log(document.querySelector('h1'));
console.log(document.querySelector('#description'));
console.log(document.querySelector('.oldImg'));

console.dir(document.querySelector('div a'));

/* querySelectorAll(selector) */
console.dir(document.querySelectorAll('div a'));

/* Setting Content */
let aboutPara = document.querySelector('p');
console.log(aboutPara);
console.log("aboutPara.innerText :", aboutPara.innerText);
console.log("aboutPara.innerHTML :", aboutPara.innerHTML);
console.log("aboutPara.textContent :", aboutPara.textContent);

// aboutPara.innerText = "Hi, I am Peter Parker!";
// aboutPara.innerHTML = "Hi, I am <b>Peter Parker</b>!";

let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;

/* getAttribute(attribute) & setAttribute(attribute, setValue) */
let bold = document.querySelector('b');
console.log(bold.innerHTML);
console.log(bold.getAttribute('id'));
console.log(bold.setAttribute('id', 'spiderText'));
console.log(bold.getAttribute('id'));
console.log(bold.getAttribute('class'));    // Returns null
console.log(bold.setAttribute('class', 'boldText'));
console.log(bold.getAttribute('class'));

/* Manipulating style */
heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll('.box a');
// for (let i=0; i<links.length; i++) {
//     links[i].style.color = "salmon";
// }

for (const link of links ) {
    link.style.color = "seagreen";  // Sets Inline CSS
}

/* classList() */ // ClassList used, to add multiple classes on an element, instead of setAttribute() property 

let heading2 = document.querySelector('h2');
console.log("heading2.classList :>>", heading2.classList);
heading2.classList.add('green');
heading2.classList.add('underline');
console.log("heading2.classList :>>", heading2.classList);
heading2.classList.remove('underline');
console.log(heading2.classList.contains('underline'));
console.log(heading2.classList.toggle('underline'));
// console.log(heading2.classList.toggle('green'));

let box = document.querySelector('.box');
console.log(box.classList.toggle('yellowbg'));

/* Navigation : parentElement, children, previousElementSibling / nextElementSibling */

let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
console.log('box.children :>> ', box.children);

let ul = document.querySelector('ul');
console.log('ul.parentElement :>> ', ul.parentElement);
console.log('ul.childElementCount :>> ', ul.childElementCount);
console.log('ul.children :>> ', ul.children);
console.log('ul.childNodes :>> ', ul.childNodes);

console.log('ul.children[1].previousElementSibling.innerText :>> ', ul.children[1].previousElementSibling.innerText);
console.log('ul.children[1].nextElementSibling.innerText :>> ', ul.children[1].nextElementSibling.innerText);

console.log(image.previousElementSibling);
image.previousElementSibling.style.fontSize = "40px";

/* Adding Element */

/* createElement(tagName) */
let newPara = document.createElement('p');
console.dir(newPara);

newPara.innerText = "Hey, I am a new Paragraph.";

let body = document.querySelector('body');
/* appendChild(element) */
body.appendChild(newPara);
box.appendChild(newPara);

let btn = document.createElement('button');
console.dir(btn);
btn.innerText = "Click me!";
box.appendChild(btn);

/* append(element) */
newPara.append("This is new text");
newPara.append(btn);

/* prepend(element) */
box.prepend(newPara);

/* insertAdjacentElement(where, element) */
// beforebegin
// afterbegin
// beforeend
// afterend

let newbtn = document.createElement('button');
newbtn.innerText = "NEW BUTTON!!";

// aboutPara.insertAdjacentElement('beforebegin', newbtn);
// aboutPara.insertAdjacentElement('afterbegin', newbtn);
// aboutPara.insertAdjacentElement('afterend', newbtn);
aboutPara.insertAdjacentElement('beforeend', newbtn);

/* Removing Element */ 

newPara.removeChild(btn);
newPara.remove();