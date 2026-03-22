let div = document.querySelector('div');
let ul = document.querySelector('ul');
let list = document.querySelectorAll('li');

div.addEventListener("click", function () {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();    // Used to stop event bubbling
    console.log("ul was clicked");
});

for (item of list) {
    item.addEventListener("click", function (event) {
        event.stopPropagation();    // Used to stop event bubbling
        console.log("li was clicked");
    });
}