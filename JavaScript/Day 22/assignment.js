/* Question 1 */

let input = document.createElement('input');
let button = document.createElement('button');

// document.body.appendChild(input);
document.body.insertAdjacentElement("afterbegin", input);
button.innerText = "Click me";
// document.body.appendChild(button);
input.insertAdjacentElement("afterend", button);

/* Question 2 */
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

/* Question 3 */
let btn = document.querySelector('#btn');
/* btn.style.backgroundColor = "blue";
btn.style.color = "white"; */
btn.classList.add('btn');

/* Question 4 */
let heading = document.createElement('h1');
/* heading.innerText = "DOM Practice";
heading.style.textDecoration = "underline"; */
heading.innerHTML = "<u>DOM Practice</u>";
heading.style.color = "purple";
input.insertAdjacentElement("beforebegin", heading);

/* Question 5 */
let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice";
// heading.insertAdjacentElement('afterend', para);
input.insertAdjacentElement('beforebegin', para);