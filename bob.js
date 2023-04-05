const prompt = require('prompt-sync')();
let Withdrawal,Deposit, Mynetprofit,name,duration,amount,Option;
console.log("\nBANK OF BHUTAN\n")

console.log("1.Loan\n"+"2.Withdrawal & Deposit\n"+"3.My netprofit\n");
Option=prompt("Choice the number:");
loan=15/100;
WithdrawalandDeposit=50000;
Mynetprofit=5/100;



if (Option==1) {
    
   
        console.log("Loan")
        name=prompt("Name:");
        amount = parseInt(prompt('Enter the amount:'));
        duration = parseInt(prompt('Duration:'));
        console.log("\nReslut:");
        
        let pay=(amount)*0.15*duration;
        let total=(amount+pay);
        console.log("Name:" + name +"\nMonthly:" + pay + "\nTotal:"+total);

    } 


 else if (Option ==2) {
    if (total >= 40 && fees == 30000) {
        console.log("Grade2:Admission successfull! ")
        console.log("Name:" + name +"\nAge:" +age + "\nCid:" + CID + "\npercentage:" + total);


    } else (
        console.log("Admission Failed! ")

    )


} else if (Option == '3') {
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
    console.log("Failed! ")
)



