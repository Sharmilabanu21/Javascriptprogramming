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

// Global scope
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); //  Accessible here
}

showGlobal();
console.log(globalVar); //  Accessible here also

// ___________________________________________________________//

// function scope
function testFunctionScope() {
  var localVar = "I am inside function";
  console.log(localVar); //  Accessible here
}

testFunctionScope();

// console.log(localVar); //  Error: localVar is not defined



