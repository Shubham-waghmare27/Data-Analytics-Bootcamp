/*
-----------------------------------------
Topic : User Input
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// String Input
// ==========================

let name = prompt("Enter your name:");

console.log("Hello,", name);

// ==========================
// Number Input
// ==========================

let age = Number(prompt("Enter your age:"));

console.log("Age:", age);

// ==========================
// Float Input
// ==========================

let height = parseFloat(prompt("Enter your height (in feet):"));

console.log("Height:", height);

// ==========================
// Boolean Input
// ==========================

let isStudent = prompt("Are you a student? (true/false)");

isStudent = isStudent.toLowerCase() === "true";

console.log("Student:", isStudent);

// ==========================
// Multiple Inputs
// ==========================

let city = prompt("Enter your city:");
let course = prompt("Enter your course:");

console.log("----- Student Information -----");

console.log("Name:", name);
console.log("Age:", age);
console.log("Height:", height);
console.log("Student:", isStudent);
console.log("City:", city);
console.log("Course:", course);