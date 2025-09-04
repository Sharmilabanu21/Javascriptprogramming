// Scope 
let global = "I am global";

function scope() {
  let local = "I am local";
  console.log(global); // Works
  console.log(local);  // Works
}
 
scope();
console.log(globalVar); // Works
// console.log(localVar); // Error! Not accessible outside

//____________________________________________________________//

// Global scope
var globalVar = "I am global";

function showGlobal() {
  console.log(global); //  Accessible here
}

showGlobal();
console.log(global); //  Accessible here also

// ___________________________________________________________//

// function scope
function testFunctionScope() {
  var local = "I am inside function";
  console.log(local); //  Accessible here
}

testFunctionScope();

// console.log(local); //  Error: local is not defined



