# 📘 User Input in JavaScript

## 📖 What is User Input?

User input allows a JavaScript program to receive data from the user while it is running.

It helps make programs interactive instead of using fixed values.

---

# 🎯 Why Do We Use User Input?

- Accept information from users
- Build interactive applications
- Avoid hardcoded values
- Create dynamic programs

---

# 📝 prompt()

In the browser, JavaScript uses the `prompt()` function to accept user input.

```javascript
let name = prompt("Enter your name:");
```

---

# 📌 Important Note

`prompt()` **always returns a string**.

```javascript
let age = prompt("Enter age:");

console.log(typeof age);
```

Output

```
string
```

---

# 📝 Number Input

```javascript
let age = Number(prompt("Enter age:"));
```

---

# 📝 Integer Input

```javascript
let marks = parseInt(prompt("Enter marks:"));
```

---

# 📝 Float Input

```javascript
let salary = parseFloat(prompt("Enter salary:"));
```

---

# 📝 Boolean Input

```javascript
let isStudent = prompt("Are you a student?");

isStudent = isStudent.toLowerCase() === "true";
```

---

# 🌍 Real-World Example

```javascript
let name = prompt("Enter your name:");
let fees = Number(prompt("Enter your fees:"));

console.log(name);
console.log(fees);
```

---

# 💡 Best Practices

- Use meaningful prompts.
- Convert input into the correct data type.
- Validate user input before processing.

---

# ⚠ Common Mistakes

### Forgetting Type Conversion

```javascript
let age = prompt("Enter age:");

console.log(age + 5);
```

Output

```
255
```

Correct

```javascript
let age = Number(prompt("Enter age:"));

console.log(age + 5);
```

Output

```
30
```

---

# 💻 Example Program

Take name, age and city from the user and display them.

---

# 📝 Practice Questions

1. Take your name as input.
2. Take your age.
3. Take your height.
4. Take your favourite programming language.
5. Build a simple Student Information program.

---

# 🎯 Interview Questions

1. What does `prompt()` return?
2. Why do we use `Number(prompt())`?
3. Difference between `prompt()` and `console.log()`?

---

# 📌 Summary

- prompt()
- String Input
- Number()
- parseInt()
- parseFloat()
- Boolean Conversion

---

# 🚀 Next Topic

➡ **05 - Operators**