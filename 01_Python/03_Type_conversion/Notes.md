# 📘 Python Type Conversion

## 📌 What is Type Conversion?

Type conversion is the process of converting one data type into another.

Python provides built-in functions to perform type conversion whenever required.

Example

```python
age = "25"

age = int(age)
```

Now the value is stored as an Integer.

---

# Why is Type Conversion Important?

Type conversion helps us

- Perform mathematical calculations
- Accept user input
- Store data correctly
- Prevent errors
- Work with different data sources

---

# Types of Type Conversion

## 1. Implicit Type Conversion

Python automatically converts one data type into another.

Example

```python
num1 = 10
num2 = 5.5

result = num1 + num2

print(result)
```

Output

```
15.5
```

Python converts Integer into Float automatically.

---

## 2. Explicit Type Conversion

The programmer converts the data manually.

Example

```python
age = "25"

age = int(age)
```

---

# Built-in Conversion Functions

| Function | Converts To |
|-----------|-------------|
| int() | Integer |
| float() | Float |
| str() | String |
| bool() | Boolean |

---

# Integer to Float

```python
age = 25

float(age)
```

Output

```
25.0
```

---

# Float to Integer

```python
price = 99.99

int(price)
```

Output

```
99
```

> Decimal values are removed (not rounded).

---

# Integer to String

```python
marks = 95

str(marks)
```

Output

```
"95"
```

---

# String to Integer

```python
num = "100"

int(num)
```

Output

```
100
```

---

# String to Float

```python
height = "5.10"

float(height)
```

---

# Boolean Conversion

```python
bool(1)
```

Output

```
True
```

```python
bool(0)
```

Output

```
False
```

---

# Checking Data Type

```python
type(variable)
```

Example

```python
print(type(age))
```

---

# Common Errors

❌ Invalid Conversion

```python
int("Hello")
```

Output

```
ValueError
```

Reason:

"Hello" is not a valid number.

---

# Best Practices

✅ Convert data only when required.

✅ Validate user input before conversion.

✅ Use meaningful variable names.

---

# Real-World Example

Suppose a user enters age using the keyboard.

```python
age = input("Enter Age : ")

age = int(age)

print(age + 5)
```

Without conversion, mathematical operations cannot be performed.

---

# Practice Questions

## Beginner

1. Convert Integer into Float.
2. Convert Float into Integer.
3. Convert Integer into String.
4. Convert String into Integer.

---

## Intermediate

Create

```python
price = "450"

quantity = "3"
```

Convert both values into Integer.

Calculate Total Price.

Expected Output

```
1350
```

---

# Interview Questions

## Q1. What is Type Conversion?

Type conversion is the process of converting one data type into another.

---

## Q2. What are the two types of Type Conversion?

- Implicit Conversion
- Explicit Conversion

---

## Q3. Which function converts String into Integer?

```python
int()
```

---

## Q4. Which function converts Integer into String?

```python
str()
```

---

## Summary

- Python supports implicit and explicit conversion.
- Use int(), float(), str(), and bool().
- Type conversion is frequently used with user input.
- Always validate data before conversion.

---

# Next Topic

➡️ User Input