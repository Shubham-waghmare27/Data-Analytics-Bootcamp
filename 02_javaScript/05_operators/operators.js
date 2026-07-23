/*
-----------------------------------------
Topic : Operators
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// Arithmetic Operators
// ==========================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// ==========================
// Comparison Operators
// ==========================

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// Strict Equality

console.log(10 === "10");
console.log(10 !== "10");

// ==========================
// Assignment Operators
// ==========================

let x = 10;

x += 5;
console.log(x);

x -= 2;
console.log(x);

x *= 3;
console.log(x);

x /= 2;
console.log(x);

// ==========================
// Logical Operators
// ==========================

let age = 22;
let isStudent = true;

console.log(age > 18 && isStudent);
console.log(age > 18 || isStudent);
console.log(!isStudent);

// ==========================
// Membership Equivalent
// ==========================

let languages = ["Python", "JavaScript", "SQL"];

console.log(languages.includes("Python"));
console.log(languages.includes("Java"));

// ==========================
// Identity Comparison
// ==========================

let arr1 = [1, 2];
let arr2 = arr1;
let arr3 = [1, 2];

console.log(arr1 === arr2);
console.log(arr1 === arr3);