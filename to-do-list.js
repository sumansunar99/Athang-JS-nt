const prompt = require("prompt-sync")();
let details = prompt("task:")
switch (details) {
    case "breakfast":
        console.log("7:30 am");
        break;
    case "lunch":
        console.log("1:00 pm");
        break;
    case "dinner":
        console.log("8:30 pm");
        break;
    default:
        console.log("no value")

}