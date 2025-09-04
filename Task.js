// Scope 
let globalVar = "I am global";

function scope() {
  let localVar = "I am local";
  console.log(globalVar); // Works
  console.log(localVar);  // Works
}
 
scope();
console.log(globalVar); // Works
// console.log(localVar); // Error! Not accessible outside

//____________________________________________________________//


// Hoisting
// variable hoisting
let name='Hii'
name='Hello'
console.log(name); // Hello

// function hoisting
Hellodude(); // Works before declaration

function Hellodude() //function declaration
{
  console.log("I am sharmi!");
}

//____________________________________________________________//

// Closures
// function + Lexical scope = closure
// why closure?
// Data privacy
// Creating private variables
// Maintaining state (like counters)
// Functions inside functions

function outer() {
  let num = "20";
  
  function inner() {
    console.log(num); // inner can access outer's variable
  }

  return inner;// returning the function itself
}

const Func = outer(); // Call outer() and store the returned inner function inside Func
Func();//call

//____________________________________________________________________//


// Higher Order Function

function greetUser(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello " + name);
}

greetUser("Sharmi", sayHello); // Output: Hello Sharmi

// Returning function
function multiplier(factor) {
  return function(x) {
    return x * factor;
  }
}

const double = multiplier(2);
console.log(double(5)); // 10

//______________________________________________________________//

// DOM manipulation

<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <p id="one">
      Hello!
    </p>
    <script>
      var doc = document.getElementById("one");//getting element by id
      console.log(doc.textContent); //print original content
      doc.textContent="Bye" //changing content
    </script>
  </body>
</html>
