/*
-----------------------------------------
Topic : Functions
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// Basic Function
// ==========================

function greet() {
    console.log("Welcome to JavaScript!");
}

greet();

// ==========================
// Function with Parameters
// ==========================

function greetUser(name) {
    console.log(`Hello, ${name}`);
}

greetUser("Shubham");

// ==========================
// Multiple Parameters
// ==========================

function student(name, age) {
    console.log("Name :", name);
    console.log("Age :", age);
}

student("Rahul", 22);

// ==========================
// Return Statement
// ==========================

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log("Sum :", result);

// ==========================
// Default Parameter
// ==========================

function country(name, country = "India") {
    console.log(`${name} belongs to ${country}`);
}

country("Shubham");
country("John", "USA");