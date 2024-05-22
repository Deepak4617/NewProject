// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Define a local module for arithmetic operations
// function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   module.exports = { add, subtract };

// Load the third-party module 'lodash'
// const _ = require('lodash');

// // Use a function from 'lodash'
// const array = [1, 2, 3, 4];
// console.log(_.reverse(array)); // Output: [4, 3, 2, 1]

// Define a function to be exported
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Export the function
  module.exports = greet;
  
  