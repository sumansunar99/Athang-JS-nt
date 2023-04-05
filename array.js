const prompt = require("prompt-sync")();

// Declare an empty array to store data
var user = [];

// Use a for loop to prompt the user for input and store it in the array
for (var i = 0; i < 5; i++) {
  user.push(prompt("Enter data:"));
  
}


// Use a second do while loop to retrieve the data from the array and print it to the console
do{
    let num=parseInt(prompt("Enter number:"));
    console.log(user[num]);
    ans=prompt("Want to continue:")
}
while(ans=="yes"||"Yes")