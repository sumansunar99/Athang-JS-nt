const prompt = require("prompt-sync")();
let Name = [];
let DATE = [];
let EId=[];
let emp=[];
let loop;

do{
console.log("\t\EMPLOYEE MANAGEMENT SYSTEM\n");
console.log("\n\t\tEMPLOYEE LIST \n");
console.log("\nEMPLOYEE NAME\t\tEMPLOYEE ID\t\tDATE");
for(let i=0; i<Name.length;i++){
    console.log(Name[i]+"\t\t\t"+emp[i]+EId[i]+"\t\t\t"+DATE[i]+"\n");
    }
console.log("\n1. ADD EMPLOYEE\n2. REMOVE EMPLOYEE\n3. UPDATE EMPLOYEE");
let acc = prompt('Enter 1 Or 2 Or 3:');



if (acc == 1) {
    console.log("\n1. ADD EMPLOYEE");
    const newid=Name.length+1;
        Name.push(prompt("Name:"));
        DATE.push(prompt("Date:"));
        EId.push(newid)
        emp.push("EM- ")

    
} else if (acc == 2) {
    console.log("\n2. REMOVE EMPLOYEE");
    let Id =parseInt(prompt("Enter Employee ID:EM- "));
    for(let i=0; i<Name.length;i++){
        if(EId.includes(Id)){
            Id = Id -1;
            Name[Id]=" ";
            DATE[Id]=" ";
            EId[Id]=" ";
            emp[Id]=" "
            Id = 1000 
            console.log("Press enter to remove");
        }
        }
   
}
else if (acc == 3) {

    console.log("\n3. UPDATE EMPLOYEE");
    let Id2=parseInt(prompt("Enter the ID of the data item you want to update:"));
   
    if (EId.includes(Id2)) {
        let newName = prompt("Enter the new name:");
        let newDate = prompt("Enter the new date:");

      Id2= Id2 - 1;
      Name[Id2] = newName;
      DATE[Id2] = newDate;
        console.log(`Employee with ID ${EId} have been updated`);
    } else {
      console.log(`Employee with ID ${EId} not found`);
   
    }

}
else {
   console.log("Wrong Input!!! \nEnter option from 1-3");
}
loop = prompt("Press Enter to continue:")
}while(loop!="no")


