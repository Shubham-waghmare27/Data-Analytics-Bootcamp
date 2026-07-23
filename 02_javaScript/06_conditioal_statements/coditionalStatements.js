/*
-----------------------------------------
Topic : Conditional Statements
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// if Statement
// ==========================

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// ==========================
// if...else Statement
// ==========================

let marks = 45;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ==========================
// if...else if...else Statement
// ==========================

let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// ==========================
// Nested if
// ==========================

let userAge = 22;
let hasLicense = true;

if (userAge >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("License required.");
    }
} else {
    console.log("Not eligible to drive.");
}

// ==========================
// Logical Operators
// ==========================

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}