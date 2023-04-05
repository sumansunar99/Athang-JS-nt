const prompt = require('prompt-sync')();
do {
    console.log("\nEnter your marks to check grade");
    marks = parseInt(prompt("Enter your marks:"));


    if (marks >= 90 && marks <= 100) {
        grade = "A+";
    } else if (marks >= 80 && marks < 90) {
        grade = "A";
    } else if (marks >= 70 && marks < 80) {
        grade = "B";
    } else if (marks >= 60 && marks < 70) {
        grade = "C";
    } else if (marks >= 50 && marks < 60) {
        grade = "D";
    } else if (marks >= 40 && marks < 50) {
        grade = "E";
    } else if (marks=0) {
        grade = "F";
    }
    else {
        console.log("try one more");
    }

    console.log("Your grade is " + grade);
    ans = prompt("Do u want to try again:");
}
while (ans == "yes" || ans == "Yes");
