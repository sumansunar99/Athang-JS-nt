const prompt = require("prompt-sync")();
for(let i=0;i<5;i++){
    console.log("hello");
    for(let j=0;j<5;j++){
        console.log("hi");
    }
}

// n+=2; same as n=n+2



// function animateHeart() {
//     for (let i = 0; i < 30; i++) { // loop through 30 frames
//       let row = "";
//       for (let j = 0; j < 60; j++) { // loop through 60 columns
//         let x = Math.pow(Math.sin(j * Math.PI / 30), 3); // calculate x coordinate
//         let y = -1 * (13 * Math.cos(j * Math.PI / 30) - 5 * Math.cos(2 * j * Math.PI / 30) - 2 * Math.cos(3 * j * Math.PI / 30) - Math.cos(4 * j * Math.PI / 30)); // calculate y coordinate
//         x *= 15; // scale x coordinate
//         y *= 15; // scale y coordinate
//         x += 30; // shift heart to center of screen
//         y += 15;
//         if (Math.floor(x) == i && Math.floor(y) == j) { // check if pixel is part of heart
//           row += "\u2764"; // add heart symbol to row
//         } else {
//           row += " "; // add empty space to row
//         }
//       }
//       console.log(row); // print row to console
//     }
//     console.log("Happy Valentine's Day!"); // print a message at the end
//   }
  
//   animateHeart();
  