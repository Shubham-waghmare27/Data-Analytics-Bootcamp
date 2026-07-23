# 📘 Data Types in JavaScript

## 📖 What are Data Types?

A data type defines the kind of value a variable can store.

Every variable in JavaScript stores a value, and each value has a specific data type.

---

# 🎯 Why Do We Need Data Types?

Data types help JavaScript understand:

- What kind of value is stored
- What operations can be performed
- How memory should be managed

---

# 📌 Primitive Data Types

JavaScript has **7 Primitive Data Types**.

| Data Type | Example |
|-----------|---------|
| String | `"Hello"` |
| Number | `25` |
| Boolean | `true` |
| Undefined | `let x;` |
| Null | `null` |
| BigInt | `12345678901234567890n` |
| Symbol | `Symbol("id")` |

---

# 📌 Non-Primitive Data Types

| Data Type | Example |
|-----------|---------|
| Object | `{}` |
| Array | `[]` |
| Function | `function(){}` |

---

# 📝 Number

Stores both integers and decimal values.

Example

```javascript
let age = 25;
let salary = 55000.75;
```

Unlike Python, JavaScript uses **Number** for both integers and floating-point numbers.

---

# 📝 String

Stores text.

Example

```javascript
let name = "Shubham";
```

Strings can be written using:

- Double quotes `" "`
- Single quotes `' '`
- Backticks `` ` ` ``

---

# 📝 Boolean

Stores only two values.

```javascript
true
false
```

Example

```javascript
let isStudent = true;
```

---

# 📝 Undefined

A variable that has been declared but not assigned a value.

Example

```javascript
let address;
```

Output

```
undefined
```

---

# 📝 Null

Represents an intentional empty value.

Example

```javascript
let phone = null;
```

---

# 📝 Object

Stores data as key-value pairs.

Example

```javascript
let student = {
    name: "Shubham",
    age: 30
};
```

---

# 📝 Array

Stores multiple values in a single variable.

Example

```javascript
let skills = ["Python", "JavaScript", "SQL"];
```

---

# 📌 typeof Operator

Used to check the data type of a variable.

Example

```javascript
console.log(typeof name);
```

Output

```
string
```

Example

```javascript
console.log(typeof age);
```

Output

```
number
```

---

# 🌍 Real-World Example

```javascript
let studentName = "Shubham";
let age = 30;
let feesPaid = true;
let subjects = ["Python", "SQL", "Power BI"];

console.log(studentName);
console.log(age);
console.log(feesPaid);
console.log(subjects);
```

This example shows how different data types work together in a Student Management System.

---

# 💡 Best Practices

✔ Use meaningful variable names.

✔ Use `const` for values that don't change.

✔ Use `let` for values that may change.

✔ Use `typeof` to verify data types during debugging.

✔ Keep related data inside objects.

---

# ⚠ Common Mistakes

### 1. Confusing Number and String

```javascript
let age = "25";
```

This is a **String**, not a Number.

---

### 2. Confusing null and undefined

```javascript
let city;
```

is **undefined**

```javascript
let city = null;
```

is **null**

---

### 3. Assuming Arrays have a separate typeof

```javascript
let skills = ["Python", "SQL"];

console.log(typeof skills);
```

Output

```
object
```

Arrays are technically a type of object in JavaScript.

---

# 💻 Example Program

```javascript
let name = "Shubham";
let age = 30;
let isStudent = true;
let city;
let phone = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof phone);
```

---

# 📝 Practice Questions

### Beginner

1. Create one variable of each primitive data type.

2. Print their values.

3. Print their data types using `typeof`.

4. Create an object representing a student.

5. Create an array of your favorite programming languages.

---

### Intermediate

Create an Employee object containing:

- Name
- Age
- Salary
- Department
- Skills (Array)
- IsPermanent (Boolean)

Print the complete object and check the type of each property.

---

# 🎯 Interview Questions

### Q1. What are data types in JavaScript?

### Q2. Difference between Primitive and Non-Primitive data types?

### Q3. What is the typeof operator?

### Q4. What is the difference between null and undefined?

### Q5. Why does `typeof []` return `"object"`?

---

# 📌 Summary

In this chapter you learned:

- What data types are
- Primitive data types
- Non-primitive data types
- Object
- Array
- typeof operator
- Best practices
- Common mistakes

---

# 🚀 Next Topic

➡ **03 - Type Conversion**