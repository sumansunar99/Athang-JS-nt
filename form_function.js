const prompt = require('prompt-sync')();


function form(name,age,hobby) {
    

    console.log('\nname:' +name+ '\nAge:' +age+ '\nhobby:' +hobby);
 
}
function des(name,age,hobby){
    console.log("His name is" + " " +name+" "+"He is now"+ " " +age+" "+"years of age and he likes"+ " " +hobby);
}
let   name=prompt('Enter your name:');
 let  age=parseInt(prompt('Enter your age:'));
   let hobby=prompt('Enter your hobby:');

form(name,age,hobby);
des(name,age,hobby);