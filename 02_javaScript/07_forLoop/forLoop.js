/*
-----------------------------------------
Topic : For Loop
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// Basic for Loop
// ==========================

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ==========================
// Custom Range
// ==========================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ==========================
// Step Value
// ==========================

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// ==========================
// Reverse Loop
// ==========================

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// ==========================
// Loop Through String
// ==========================

let name = "Shubham";

for (let char of name) {
    console.log(char);
}

// ==========================
// Loop Through Array
// ==========================

let languages = ["Python", "JavaScript", "SQL"];

for (let language of languages) {
    console.log(language);
}

// ==========================
// Nested Loop
// ==========================

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        console.log(`(${row}, ${col})`);
    }
}