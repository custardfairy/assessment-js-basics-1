// Create a variable called password and set it’s value to a string of your choice.  Write a conditional statement that checks if the password meets the following constraints:

//At least 10 characters long
//Contains at least one letter and one number
//If the password meets the constraint, console log a success message.
//If the password fails the constraint, console log a failure message.
//Test out your conditional by changing the value of your password variable and running your file!

let password = (`itsBritn3y`)

//  if length is >= 10 && contains at least one letter && one number

If ((password.length >= 10) && (password.search(/[0-9]/) < 0) && (password.search(/[a-zA-Z]/) < 0 )) {
    console.log(`Success, you're incredible.`)
} else {
    console.log (`Failure. What a disappointment.`)
}

