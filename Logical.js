// Logical AND - &&
// The && operator returns true if both operands are true
// If either operand is false, it returns false
// conditions  true && true its true
// conditions  true && false its false

if (true && true) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

if (true && false) {
    console.log("Both conditions are true");
} else {
    console.log("At least one condition is false");
}

//_________________________________________________________________//


//Logical OR - ||
// At least one condition is true all statements will be true
// If either operand is true, it returns true
// conditions  true || false its true
if (true || false) {
    console.log("At least one condition is true ");
} else {
    console.log("Both conditions are false");
}

if (false || false) {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

//_________________________________________________________________//

// Logical NOT - !
// The ! operator reverses the boolean value of its operand
// If the operand is true, it returns false
// If the operand is false, it returns true
// console.log(!true) o/p will be false
// console.log(!false) o/p will be true
if (!true) {
    console.log("The condition is false");
} else {
    console.log("The condition is true");
}

if (!false) {
    console.log("The condition is false");
} else {
    console.log("The condition is true");
}   
