const prompt = require('prompt-sync')();
let ans;
let num1;
let num2;
let num3;
do {
    console.log("\nEnter number");
    num1 = parseInt(prompt("Enter your number1:"));
    num2 = parseInt(prompt("Enter your number2:"));
    num3 = parseInt(prompt("Enter your number3:"));

    if (num1 > num2) {
        let num = num1;
        num1 = num2;
        num2 = num;
    }

    if (num1 > num3) {
        let num = num1;
        num1 = num3;
        num3 = num;
    }

    if (num2 > num3) {
        let num = num2;
        num2 = num3;
        num3 = num;
    }

    console.log(num1 + ", " + num2 + ", " + num3);
    ans = prompt("Do u want to try again:");
}

while (ans == "yes" || ans == "Yes");