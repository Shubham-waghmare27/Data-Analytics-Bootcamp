/*
-----------------------------------------
Topic : Break & Continue
Language : JavaScript
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
*/

// ==========================
// break
// ==========================

console.log("Break Example");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// ==========================
// continue
// ==========================

console.log("\nContinue Example");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        continue;
    }

    console.log(i);
}

// ==========================
// Empty Block
// (JavaScript has no pass keyword)
// ==========================

console.log("\nEmpty Block Example");

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        // Do nothing
    }

    console.log(i);
}

// ==========================
// Practical Example
// ==========================

let password = "";

while (true) {

    password = prompt("Enter Password");

    if (password === "javascript123") {
        console.log("Login Successful");
        break;
    }

    console.log("Wrong Password");
}