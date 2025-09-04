//Data Types in JavaScript
// Primitive datatypes and Non-primitive datatypes
// primitive datatypes
// string
let name = "Sharmila";   // double quotes
let city = 'Coimbatore'; // single quotes
let greet = `Hello`; // template literal (backticks)

console.log(name);   // Sharmila
console.log(city);   // Coimbatore
console.log(greet);  // Hello Sharmila

//Number
let age = 22;          // integer
let price = 199.99;    // decimal
let temp = -5;         // negative number

console.log(age);   // 22
console.log(price); // 199.99
console.log(temp);  // -5

//Boolean
let isStudent = true;
let isWorking = false;

console.log(isStudent); // true
console.log(isWorking); // false

//Undefined
let job;
console.log(job); // undefined

//Null
let car = null;
console.log(car); // null

//Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (symbols are always unique)

// Non-primitive datatypes
// Object
let person = {
  name: "Sharmila",
  age: 22,
  city: "Coimbatore"
};

console.log(person.name);  // Sharmila
console.log(person["age"]); // 22

// Array
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

// Function
function User() {
  console.log("Hello Sharmila");
}
User(); // Hello Sharmila