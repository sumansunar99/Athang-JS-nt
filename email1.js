const prompt = require("prompt-sync")();

let name, code, subject, message, email, loop,name1,code1,name2,code2;

do {
  email = prompt('Enter\n1. If You want to Send Email\n2. If You want to Receive Email: ');

  switch (email) {
    case '1':
      console.log("Send Email");
      name = prompt('Your name: ');
      code = parseInt(prompt('Set your code: '));
      subject = prompt('Your subject: ');
      message = prompt('Your message (not more than 20 characters): ');

      // Check message length
      if (message.length >= 20) {
        console.log('Error: Message should not be more than 20 characters.');

        break;
      }

      sendEmail();
      break;

    case '2':
      console.log("Receive Email");
       name1 = prompt('Your name: ');
       code1 = parseInt(prompt('Enter the code: '));

      // Check if name and code match
      if (name1 == name && code1 == code) {
        receiveEmail();
        // console.log('subjext: '+subject+'\nyour message:  ' +message);
      }else  if (name2 == name && code2 == code) {
        receiveEmail();
        // console.log('subjext: '+subject+'\nyour message:  ' +message);
      } 
      else {
        console.log('Error: Invalid input.');
      }
      break;

    default:
      console.log('Error: Invalid input.');
      break;
  }

  function receiveEmail() {
    console.log('subjext: '+subject+'\nyour message:  ' +message);
  }

  function sendEmail() {
    console.log('Sending email');
    console.log('dear: ' +name+ ' your message is being sent, la  ');
  }

  loop = prompt('If You wanna Send Email or Receive Email:? Again:\nThan enter yes  ');

} while (loop == 'yes' || loop == 'Yes');

console.log("Thanks for using our service. Goodbye!");

