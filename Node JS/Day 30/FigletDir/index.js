import figlet from "figlet";

// async function doStuff() {
//     const text = await figlet.text("Hello World!!");
//     console.log(text);
// }

// doStuff();

figlet("Rajneesh Kumar", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

figlet("Pinki Devi", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});