// Logical operator - or || and and &&
const password = 'pass12766';

if(password.length >= 12 && password.includes('@') ) {
    console.log("This password is so strong.");
} else if(password.length >= 8 || password.includes('@') ) {
    console.log("This password is long enough.");
} else {
    console.log("This password is not long enough.");

 }

 // Logical Not (!)

 let user = false;
 if(! user){
     console.log("You must be logged in to continue.");

 }

 console.log(!true);
 console.log(!false);