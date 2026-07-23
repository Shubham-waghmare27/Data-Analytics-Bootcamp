# 📘 Functions in JavaScript

## 📖 What is a Function?

A function is a reusable block of code that performs a specific task.

It allows us to organize code into smaller, reusable units.

---

# 🎯 Why Do We Use Functions?

- Reuse code
- Improve readability
- Reduce duplication
- Make code modular
- Simplify maintenance

---

# Function Syntax

```javascript
function functionName() {
    // code
}
```

---

# Calling a Function

```javascript
greet();
```

---

# Parameters

Parameters are variables listed in the function definition.

```javascript
function greet(name) {
```

---

# Arguments

Arguments are values passed when calling the function.

```javascript
greet("Shubham");
```

---

# Return Statement

The `return` statement sends a value back to the caller.

```javascript
function add(a, b) {
    return a + b;
}
```

---

# Default Parameters

```javascript
function greet(name = "Guest") {
    console.log(name);
}
```

---

# Best Practices

- Use descriptive function names.
- Keep each function focused on one task.
- Return values instead of relying only on `console.log()`.

---

# Common Mistakes

- Forgetting to call the function.
- Forgetting to return a value.
- Passing too few or too many arguments.

---

# Practice Questions

1. Print your name using a function.
2. Add two numbers.
3. Find the square of a number.
4. Return the larger of two numbers.
5. Use a default parameter.

---

# Interview Questions

1. What is a function?
2. Difference between parameters and arguments?
3. Why do we use `return`?
4. What are default parameters?

---

# Summary

- Function
- Parameters
- Arguments
- Return
- Default Parameters

---

# Next Topic

➡ Variable Scope