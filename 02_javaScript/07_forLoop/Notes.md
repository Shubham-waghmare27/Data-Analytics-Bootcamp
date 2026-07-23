# 📘 For Loop in JavaScript

## 📖 What is a For Loop?

A `for` loop is used to execute a block of code repeatedly until a specified condition becomes false.

---

# 🎯 Why Do We Use For Loops?

- Avoid repetitive code
- Iterate through arrays and strings
- Perform repeated calculations
- Build efficient programs

---

# Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

---

# Basic Example

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

---

# Loop Through String

```javascript
let name = "Python";

for (let char of name) {
    console.log(char);
}
```

---

# Loop Through Array

```javascript
let languages = ["Python", "JavaScript"];

for (let language of languages) {
    console.log(language);
}
```

---

# Nested Loop

A loop inside another loop.

---

# Best Practices

- Use meaningful variable names.
- Avoid unnecessary nested loops.
- Keep loop conditions simple.

---

# Common Mistakes

- Infinite loops.
- Incorrect loop condition.
- Forgetting update expression (`i++`).

---

# Practice Questions

1. Print numbers from 1 to 10.
2. Print even numbers.
3. Print odd numbers.
4. Print each character of your name.
5. Print all elements of an array.

---

# Interview Questions

1. What are the three parts of a `for` loop?
2. Difference between `for` and `while`?
3. What is `for...of`?

---

# Summary

- for loop
- Loop structure
- String iteration
- Array iteration
- Nested loop

---

# Next Topic

➡ 08 - While Loop