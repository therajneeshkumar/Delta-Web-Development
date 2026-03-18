let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.insertAdjacentElement('afterbegin', container);

let para = document.createElement('p');
para.innerText = "Hey I'm red!";
para.classList.add('red');
container.insertAdjacentElement('afterbegin', para);

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
h3.style.color = 'blue';
para.insertAdjacentElement('afterend', h3);

let div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';
container.insertAdjacentElement('beforeend', div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div.insertAdjacentElement('afterbegin', h1);

let p = document.createElement('p');
p.innerText = "ME TOO!";
div.insertAdjacentElement('beforeend', p);