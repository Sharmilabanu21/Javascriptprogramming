// 1. Arithmetic Operators (+, -, *, /, %, **)
let a = 10;
let b = 3;
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333...
console.log("Modulus:", a % b);        // 1 (remainder)
console.log("Exponent:", a ** b);      // 1000 (10^3)


// 2. Assignment Operators (=, +=, -=, *=, /=, %=, **=)
let x = 5;
x += 2; // same as x = x + 2
console.log("x after += 2:", x); // 7

x *= 3; // same as x = x * 3
console.log("x after *= 3:", x); // 21


// 3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
let num = 10;
let str = "10";

console.log(num == str);  // true  (only checks value)
console.log(num === str); // false (checks value + type)
console.log(num != str);  // false
console.log(num !== str); // true
console.log(num > 5);     // true
console.log(num <= 10);   // true


// 4. Logical Operators (&&, ||, !)
let isStudent = true;
let isWorking = false;

console.log(isStudent && isWorking); // false (AND)
console.log(isStudent || isWorking); // true  (OR)
console.log(!isStudent);             // false (NOT)


// 5. Unary Operators (++ and --)
let count = 5;
console.log(++count); // 6 (pre-increment)
console.log(count++); // 6 (post-increment, value shown before increase)
console.log(count);   // 7
console.log(--count); // 6 (pre-decrement)


// 6. Ternary Operator (? :)
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult
