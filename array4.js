const prompt = require("prompt-sync")();

let num = [];

for (let i = 1; i <= 10; i++) {
    num.push(parseInt(prompt("enter num" + i + ":")));

}
console.log("");