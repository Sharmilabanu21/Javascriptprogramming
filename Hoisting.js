// Hoisting
// variable hoisting
let name='Hii'
name='Hello'
console.log(name); // Hello


//____________________________________________________________//


// function hoisting
Hellodude(); // Works before declaration

function Hellodude() //function declaration
{
  console.log("I am sharmi!");
}
