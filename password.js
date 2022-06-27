// Create a variable called password and set it’s value to a string of your choice.  Write a conditional statement that checks if the password meets the following constraints:

//At least 10 characters long
//Contains at least one letter and one number
//If the password meets the constraint, console log a success message.
//If the password fails the constraint, console log a failure message.
//Test out your conditional by changing the value of your password variable and running your file!

let password = (`itsBritn3y`)

//  if length is >= 10 && contains at least one letter && one number
// if (conditions) {
    // execution block
//} else {
    // execution block
//}

// Variables

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Enter password for validation.`, function(input){

    const regex = /\d/;
    const hasNumber = regex.test(input)

    const regex2 = /[a-zA-Z]/
    const hasLetter = regex2.test(input)

    if (input.length >= 10 && hasNumber === true && hasLetter === true) {
        console.log(`This password is elite.`)
    } else {
        console.log(`Sad trombone; no access for you.`)
    }

})