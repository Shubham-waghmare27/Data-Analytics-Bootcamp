# 📘 Python Data Types

## 📌 What is a Data Type?

A data type defines the kind of value stored in a variable.

Python automatically identifies the data type based on the assigned value.

Example:

```python
age = 25
name = "Shubham"
```

Here:

- `age` is an Integer (`int`)
- `name` is a String (`str`)

---

# Why are Data Types Important?

Data types help Python understand:

- How data should be stored
- What operations are allowed
- How memory should be managed

---

# Built-in Data Types

| Data Type | Description | Example |
|------------|-------------|---------|
| int | Whole numbers | 100 |
| float | Decimal numbers | 99.5 |
| str | Text | "Python" |
| bool | True or False | True |

---

# Integer (int)

Stores whole numbers.

```python
age = 25
```

Examples

```python
10
250
-35
1000
```

---

# Float (float)

Stores decimal numbers.

```python
price = 99.99
```

Examples

```python
5.5
3.14
100.25
```

---

# String (str)

Stores text.

```python
city = "Pune"
```

Examples

```python
"Python"

"Hello"

"Data Analytics"
```

---

# Boolean (bool)

Represents only two values.

```python
True
False
```

Example

```python
is_logged_in = True
```

---

# Checking Data Types

Use

```python
type()
```

Example

```python
print(type(age))
```

Output

```
<class 'int'>
```

---

# Dynamic Typing

Python automatically assigns data types.

```python
x = 10

x = "Hello"

x = True
```

The same variable can store different types.

---

# Best Practices

✅ Use meaningful variable names.

```python
student_name

course_fee

is_active
```

Avoid

```python
x

a

abc
```

---

# Common Mistakes

❌ Writing numbers inside quotes

```python
age = "25"
```

This becomes a String, not an Integer.

Correct

```python
age = 25
```

---

# Real-World Example

```python
customer_name = "Rahul"

product_price = 49999.99

quantity = 2

is_paid = True
```

---

# Practice Questions

### Beginner

1. Create variables using all four data types.
2. Print each value.
3. Print the data type of each variable.

### Intermediate

Create variables for

- Employee Name
- Salary
- Experience
- Is Permanent Employee

Print all values and their data types.

---

# Interview Questions

### Q1. What is a Data Type?

A data type specifies the type of value stored in a variable.

---

### Q2. How many basic data types are commonly used in Python?

- int
- float
- str
- bool

---

### Q3. Which function is used to check the data type?

```python
type()
```

---

# Summary

- Python automatically detects data types.
- Variables can store different kinds of values.
- Use `type()` to identify the data type.
- Python is dynamically typed.

---

# Next Topic

➡️ Type Conversion