const prompt = require('prompt-sync')();

let Grade, name, age, CID, eng, dzo, math, fees;

console.log("\nSchool Admission\n")
Grade = prompt('Enter Your Grade: <1 -3>');
name = prompt('Enter your fullname: ');
age = parseInt(prompt('age:'));
CID = parseInt(prompt('CID:'));
eng = parseInt(prompt('eng marks:'));
dzo = parseInt(prompt('dzo marks:'));
math = parseInt(prompt('math marks:'));
fees = parseInt(prompt('fees:'));

let total = (eng + dzo + math) / 3;

if (Grade = '1') {
    
    if (total >= 60 && fees == 25000) {
        console.log("Grade1:Admission successfull!")
        console.log("Name:" + name +"\nAge:" +age + "\nCid:" + CID + "\npercentage:" + total);

    } else (
        console.log("Admission Failed! ")

    )


} else if (Grade == ' 2') {
    if (total >= 40 && fees == 30000) {
        console.log("Grade2:Admission successfull! ")
        console.log("Name:" + name +"\nAge:" +age + "\nCid:" + CID + "\npercentage:" + total);


    } else (
        console.log("Admission Failed! ")

    )


} else if (Grade == '3') {
    sci = parseInt(prompt('sci:'));
    total1 = (eng + dzo + math + sci) / 4;
    if (total1 >= 50 && fees == 45000) {
        console.log("Grade3:Admission successfull! ")
        console.log("Name:" + name +"\nAge:" +age + "\nCid:" + CID + "\npercentage:" + total1);


    } else (
        console.log("Admission Failed! ")

    )


}
else (
    console.log("Admission Failed! ")
)






