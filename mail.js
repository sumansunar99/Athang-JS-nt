const prompt = require("prompt-sync")();

console.log("Email\n");

console.log("Output\n");
 
let email = prompt('Enter your email: ');
let confirm = prompt('Confirm your email: ');

// if (email.includes("@gmail.com") &&  confirm.includes("@gmail.com") && email == confirm ){

//     console.log("successful!");

// // if (email == confirm){
// //     console.log("successful!");
// // }
// // if (confirm.includes("@gmail.com")){

// // }
// }
// else{
//     console.log("Your email should contail @gmail \n make sure your email matches");
// }

if (email == confirm) {
    
    if (email.includes("@gmail.com")){
        console.log("email successful!");
    }
    else {
        console.log("wrong format. should include @gmail.com");
    }
}
else{
    console.log("confirmation failed!");
}





