# 📘 While Loop in JavaScript

## 📖 What is a While Loop?

A `while` loop executes a block of code repeatedly **while a condition remains true**.

---

# 🎯 Why Do We Use While Loops?

- Repeat tasks with unknown iterations
- Wait for valid user input
- Build interactive applications
- Perform repeated calculations

---

# Syntax

```javascript
while (condition) {
    // code
}
```

---

# Example

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

---

# Infinite Loop

```javascript
while (true) {
    console.log("Running...");
}
```

Use `break` to stop an infinite loop.

---

# Best Practices

- Always update the loop variable.
- Ensure the condition eventually becomes false.
- Avoid unnecessary infinite loops.

---

# Common Mistakes

- Forgetting `count++`
- Wrong condition
- Infinite loops

---

# Practice Questions

1. Print numbers from 1 to 10.
2. Print even numbers from 2 to 20.
3. Countdown from 10 to 1.
4. Print multiplication table of 5.
5. Keep asking for a password until it is correct.

---

# Interview Questions

1. What is a while loop?
2. Difference between `for` and `while`?
3. What is an infinite loop?

---

# Summary

- while loop
- Condition
- Loop variable
- Infinite loop

---

# Next Topic

➡ 09 - Break, Continue & Pass