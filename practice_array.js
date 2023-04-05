const prompt = require('prompt-sync')();

let a= 1;
 let name = [2,3,3 ,4, 'sherab', 'thars',];

//  name[3] = 'last';


 name.push('jamtsho'); //adds an array  to end

 name.unshift('sonam'); //adds an array  to start

 name.pop();//removes an array  from  end
 name.pop();//removes an array  from  end
 name.shift('name');//adds an array  to start

console.log(name);

//  let result = name.join( ','); //This produces a string with all the elements of the array separated by a comma and a 
// output 2,3,3,last,sherab

//  console.log(name);

//  console.log(result);

// for (i=0; 1<0; i++){
    
//     console.log(name[i]);
// }

let num=[1,2,3,4,5];

num[10] = 1000;//for spesific area
num.push(2);
num.shift(2); //remove data at he begining && will shift towards left
num.unshift('sonam'); //adds an array  to start

console.log(num);

