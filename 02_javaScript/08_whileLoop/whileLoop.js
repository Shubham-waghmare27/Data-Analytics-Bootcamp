/*
-----------------------------------------
Topic : While Loop
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// Basic While Loop
// ==========================

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// ==========================
// Print Even Numbers
// ==========================

let num = 2;

while (num <= 10) {
    console.log(num);
    num += 2;
}

// ==========================
// Countdown
// ==========================

count = 5;

while (count > 0) {
    console.log(count);
    count--;
}

console.log("Blast Off! 🚀");

// ==========================
// User Input Example (Browser)
// ==========================

let password = "";

while (password !== "javascript123") {
    password = prompt("Enter Password:");
}

console.log("Access Granted!");

// ==========================
// Infinite Loop Example
// ==========================

// while (true) {
//     console.log("This runs forever!");
// }