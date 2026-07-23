# 📘 Variables in JavaScript

## 📖 What is a Variable?

A variable is a named container used to store data in memory. It allows us to save information and use it later in our program.

Think of a variable as a labeled box where you can store different types of values such as numbers, text, or true/false values.

---

# 🎯 Why Do We Use Variables?

Variables help us to:

- Store data
- Reuse data multiple times
- Update values whenever needed
- Make programs dynamic
- Improve code readability

Without variables, we would have to write the same values repeatedly, making programs difficult to maintain.

---

# 📝 Declaring Variables in JavaScript

JavaScript provides three ways to declare variables:

## 1. let (Recommended)

Used when the value may change later.

```javascript
let name = "Shubham";
```

Example:

```javascript
let age = 25;

age = 26;

console.log(age);
```

Output

```
26
```

---

## 2. const (Recommended for fixed values)

Used when the value should never change.

```javascript
const PI = 3.14159;
```

Example

```javascript
const country = "India";
```

Trying to change a const variable will produce an error.

```javascript
country = "USA";   // Error
```

---

## 3. var (Old Method)

```javascript
var city = "Pune";
```

`var` was used before ES6.

Modern JavaScript prefers **let** and **const** because they provide better scope management and fewer bugs.

---

# 📌 Variable Naming Rules

A variable name:

✔ Can contain letters

✔ Can contain numbers

✔ Can contain underscore (_)

✔ Can contain dollar sign ($)

✔ Cannot start with a number

✔ Cannot contain spaces

✔ Cannot use JavaScript reserved keywords

---

## Valid Variable Names

```javascript
let name;
let studentAge;
let first_name;
let $price;
```

---

## Invalid Variable Names

```javascript
let 1name;
let first name;
let let;
```

---

# 📌 Naming Convention

JavaScript follows **camelCase** naming convention.

Example

```javascript
let firstName;
let studentAge;
let accountBalance;
let isLoggedIn;
```

---

# 📌 Variable Assignment

Assigning a value means storing data inside a variable.

```javascript
let city = "Pune";
```

You can update the value later.

```javascript
let city = "Pune";

city = "Mumbai";

console.log(city);
```

Output

```
Mumbai
```

---

# 📌 Multiple Variable Declaration

```javascript
let name = "Shubham";
let age = 30;
let city = "Pune";
```

Or

```javascript
let name = "Shubham",
    age = 30,
    city = "Pune";
```

---

# 📌 Dynamic Typing

JavaScript is a **dynamically typed language**.

A variable can hold different data types at different times.

Example

```javascript
let value = 100;

value = "Hello";

value = true;
```

This is perfectly valid in JavaScript.

---

# 📌 typeof Operator

The `typeof` operator is used to check the data type of a variable.

Example

```javascript
let age = 25;

console.log(typeof age);
```

Output

```
number
```

Example

```javascript
let name = "Shubham";

console.log(typeof name);
```

Output

```
string
```

---

# 📊 Common Data Types

| Data Type | Example |
|------------|---------|
| String | `"Hello"` |
| Number | `25` |
| Boolean | `true` |
| Undefined | `let x;` |
| Null | `null` |
| Object | `{}` |
| Array | `[1,2,3]` |

---

# 🌍 Real-World Example

Imagine you are creating a Student Management System.

```javascript
let studentName = "Shubham";
let age = 30;
let course = "Data Analytics";
let isEnrolled = true;

console.log(studentName);
console.log(age);
console.log(course);
console.log(isEnrolled);
```

Variables make it easy to store and manage student information.

---

# 💡 Best Practices

✔ Use meaningful variable names.

```javascript
let studentName;
```

instead of

```javascript
let x;
```

✔ Use **camelCase**.

✔ Use **const** whenever the value should not change.

✔ Use **let** when the value can change.

✔ Avoid using **var** in modern JavaScript.

---

# ⚠ Common Mistakes

### 1. Starting variable with a number

```javascript
let 123name = "Shubham";
```

❌ Invalid

---

### 2. Using reserved keywords

```javascript
let let = 10;
```

❌ Invalid

---

### 3. Using spaces

```javascript
let first name = "Shubham";
```

❌ Invalid

---

### 4. Forgetting meaningful names

Bad

```javascript
let a = "Shubham";
```

Good

```javascript
let studentName = "Shubham";
```

---

# 💻 Example Program

```javascript
let name = "Shubham";
let age = 30;
let city = "Pune";
let isStudent = true;

console.log(name);
console.log(age);
console.log(city);
console.log(isStudent);

console.log(typeof name);
console.log(typeof age);
console.log(typeof city);
console.log(typeof isStudent);
```

---

# 📝 Practice Questions

### Beginner

1. Create variables for your name, age and city.

2. Print all variables.

3. Print the data type of each variable.

4. Change the value of a variable and print it again.

5. Create one variable using **const**.

---

### Intermediate

1. Create variables for a student.

- Name
- Age
- Course
- Fees
- IsPlaced

Print all values and their data types.

---

# 🎯 Interview Questions

### Q1. What is a variable?

### Q2. Difference between let, const and var?

### Q3. What is camelCase?

### Q4. What is dynamic typing?

### Q5. What does the typeof operator do?

---

# 📌 Summary

In this chapter you learned:

- What variables are
- Why variables are used
- let, const and var
- Variable naming rules
- camelCase convention
- Variable assignment
- Dynamic typing
- typeof operator
- Best practices
- Common mistakes

---

# 🚀 Next Topic

➡ **02 - Data Types**