// Higher Order Function
// function as an argument
function User(name, callback) // function as parameter
{
  callback(name); // calling the callback function
}

function Hello(name) // callback function
{
  console.log("Hello " + name); // Output: Hello Anshia
}

User("Anshia", Hello); // Output: Hello Anshia


// function as return function
function multiplies(factor) // function returning function
{
  return function(num) 
  {
    return num * factor; // using the factor from the outer function
  };
}

const double = multiplies(2); // double is now a function that multiplies by 2
console.log(double(5)); // 10

const triple = multiplies(3);
console.log(triple(5)); // 15
