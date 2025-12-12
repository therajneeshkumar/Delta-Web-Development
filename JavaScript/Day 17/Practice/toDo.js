// const prompt = require('prompt-sync')();

let todo = [];

while (true) {
    let req = prompt("Enter your request: ");
    // console.log(req);
    if (req == "quit") {
        console.log("qutting app");
        break;
    }

    if (req == "list") {
        console.log("List of tasks: ");
        console.log("----------------");
        for (task of todo) {
            console.log(todo.indexOf(task), task);
        }
        console.log("----------------");
    } else if (req == "add") {
        console.log("----------------");
        let element = prompt("Enter the Task you want to add: ")
        todo.push(element);
        console.log("Task Added");
        console.log("----------------");
    } else if (req == "delete") {
        console.log("----------------");
        let element = prompt("Enter a task you want to delete: ");

        let idx = todo.indexOf(element);
        if (idx !== -1) {
            todo.splice(idx, 1);
            console.log("Task Deleted");
        } else {
            console.log("Task not found!");
        }
        console.log("----------------");
    } else {
        console.log("Invalid request");
        console.log("----------------");
    }
}