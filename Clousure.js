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