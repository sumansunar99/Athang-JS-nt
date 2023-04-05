const prompt = require("prompt-sync")();
let details = prompt("enter details:")
switch (details) {
    case "sina":
        console.log("first name");
        break;
    case "sunar":
        console.log("last name");
        break;
    case "24":
        console.log("age");
        break;
    default:
        console.log("no value")

}