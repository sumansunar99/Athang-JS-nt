const prompt = require("prompt-sync")();

// // Declare an array variable with some numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Initialize a variable to keep track of the index of the current element in the array
// let i = 0;

// // Use a do-while loop to iterate through each element of the array
// do {
//   // Check if the current element is even
//   if (numbers[i] % 2 == 0) {
//     // If the current element is even, print it to the console

//     console.log(numbers[i]);
//   }
//   // Increment the index variable to move to the next element in the array
//   i++;
// } while (i < numbers.length);

// Example array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Initialize an empty array to store odd numbers
let oddNums = [];

// Iterate over each element in the array
for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    // Check if the number is odd using the modulus operator
    if (num % 2 !== 0){
        // If the number is odd, append it to the oddNums array
        oddNums.push(num);
    }
}

// Print the odd numbers
console.log(oddNums);

