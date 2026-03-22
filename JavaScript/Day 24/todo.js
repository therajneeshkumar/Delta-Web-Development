let h1 = document.createElement('h1');
h1.innerText = "Todo App";
document.body.prepend(h1);

let input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'task');
input.setAttribute('placeholder', 'enter your task');
h1.insertAdjacentElement('afterend', input);

let btn = document.createElement('button');
btn.innerText = "Add Task";
btn.classList.add('btn');
input.insertAdjacentElement('afterend', btn);

let ul = document.createElement('ul');
ul.style.width = '200px';
btn.insertAdjacentElement('afterend', ul);

document.querySelector('.btn').addEventListener("click", function () {
    let data = document.querySelector('#task'); 
    let list = document.querySelector('ul'); 
    let item = document.createElement('li');
    // console.log();
    item.innerText = data.value;
    item.classList.add('item');
    list.insertAdjacentElement('beforeend', item);
    data.value = '';

    let btn = document.createElement('button');
    btn.innerText = "Delete";
    btn.setAttribute('class', 'delete');
    item.appendChild(btn);
});

// let deleteBtns = document.querySelectorAll('.delete');

// for (const btn of deleteBtns) {
//     btn.addEventListener("click", function () {
//         let parent = btn.parentElement;
//         console.log(parent);
//     });
// }

/* Event Delegation : is reverse method of Event Bubbling */
ul.addEventListener("click", function (event) {
    // console.log(event.target.nodeName);
    if (event.target.nodeName == 'BUTTON') {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('Task is deleted');
    }
});