const prompt = require('prompt-sync')();

let user1 = [];
let mainpassword = [];

let loop;

do {
    console.log("Do you want to sign up or log in?");
    console.log('1. If you want to sign up:\n'+'2. If you want to log in:\n');

    let acc = prompt('Enter 1 Or 2:');

    if (acc == 1) {
        console.log("Create an account");
        let username = prompt('your username: ');
        let password = prompt('your password: ');
        let password1 = prompt('Confirm your password: ');

        if (password === password1) {

            user1.push(username);
            mainpassword.push(password);


            console.log('Dear ' + username + ', your account was successful');

        }

    } else if (acc == 2) {

        console.log("Log in to your account");
        let username = prompt('Enter your username: ');
        let password = prompt('Enter your password: ');

        if ((user1.includes(username) && mainpassword.includes(password))) {
            console.log('Welcome ' + username + ' to your account');
        } else {
            console.log('Your password did not match. Sorry, ' + username + ', please try again.');
        }
    } else {
        console.log('Please enter a valid number');
    }

    loop = prompt('Do you want to sign up or log in again? If yes, enter "yes".\n');

} while (loop != 'no')

console.log("Thanks for using our service. Goodbye!");