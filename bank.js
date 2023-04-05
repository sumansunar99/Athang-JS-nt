const prompt = require("prompt-sync")();

console.log("Bank Of Bhutan\n\n");

let opt = parseInt(prompt("Enter Your choice\n1.Loan\n2.Withdrawal & Deposit\n3.My Net Profit\n"));


if (opt == 1) {
    console.log("\n1.Loan");
    console.log("Enter Your Details");

    let name = prompt('Name:');
    let Ammount = parseInt(prompt('Ammount:'));
    let Duration = parseInt(prompt('Duration:'));
    let Monthly = Ammount * 0.15 * Duration;
    let Total = Monthly + Ammount;


    console.log("This is your reslut:"+name);
    console.log("Monthly: " + Monthly);
    console.log("Total: " + Total);




}


else if (opt == 2) {

    console.log("Withdrawal & Deposit");
    let wide = prompt('Withdrawal or Deposit? please type option 1 or2 and press enter  ');


    if (wide == 1) {
        let Withdraw_amout = parseInt(prompt("Enter your Withdrawal Ammount:  "));
        let Total_amout = 50000;

        if (Withdraw_amout <= 50000) {
            let Ramianing_amount = Total_amout - Withdraw_amout;
            console.log("Dear coustmer Your Ramianing Amount is:  " + Ramianing_amount);

        } else (
            console.log("you Dont have this much ammount")
        )
    }

    else if (wide == 2) {

        let Deposit_amount = parseInt(prompt("Enter your Deposit  Ammount:  "));
        let Total_amout = 50000;
        let Total_deopsit_amout = (Deposit_amount + Total_amout);
        console.log("Dear Coustmer Your Total Amount is:  " + Total_deopsit_amout);

    }

    else {
        console.log(" Failed!!");
    }

}


else if (opt == 3) {

    console.log("3.My Net Profit");
    console.log("Enter Your Details");

    let Total_amout = parseInt(prompt("Enter ur Total Amount: "));
    let Duration = parseInt(prompt("Enter ur Duration : "));
   
    let Total_profit = (Total_amout * 0.05 * Duration)
    let Total = (Total_profit + Total_amout)

    console.log("YOUR NET PROFIT IS:  " + Total_profit)
    console.log("YOUR NET Total:  " +Total)





}

else {
    console.log("Wrong Input!!! \nEnter option from 1-3");
}




