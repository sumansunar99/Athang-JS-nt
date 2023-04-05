const prompt = require("prompt-sync")();
console.log("\nUSER DATA\n");



// Declare an empty array to store data
let user = [];
let ans;

// Use a for loop to prompt the user for input and store it in the array
do{
    console.log("Enter Your choice\n1.Add user\n2.Remove the last user\n3.View users\n");
   opt=parseInt(prompt(":"))
if(opt==1){
   
        user.push(prompt("Add user:")); 
        console.log("successful!");
      
}
else if (opt == 2){
    user.pop();
    console.log("user removed");
}
else if(opt==3){
console.log(user);
}
else{
    console.log("invalid");
}
ans=prompt("do u want to try again")
}
while
(ans!="no")
