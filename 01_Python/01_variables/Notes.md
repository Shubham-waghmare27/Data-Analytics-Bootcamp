# 🐍 Python Variables

## 📌 What is a Variable?

A variable is a named memory location used to store data in a program.

Think of a variable as a container that holds information which can be used later in the program.

Example:

```python
name = "Shubham"
age = 32
```

Here:

- `name` stores a string.
- `age` stores an integer.

---

# Why do we use Variables?

Variables help us:

- Store data
- Reuse data
- Modify data easily
- Make code readable
- Avoid writing the same value multiple times

---

# Variable Naming Rules

✅ Allowed

```python
name
age
student_name
marks1
_my_variable
```

❌ Not Allowed

```python
1name          # Cannot start with a number
student-name   # Hyphen is not allowed
my variable    # Spaces are not allowed
class          # Reserved keyword
```

---

# Naming Convention (Best Practice)

Use **snake_case**.

Example:

```python
student_name
total_marks
phone_number
```

Avoid:

```python
StudentName
studentName
```

---

# Assigning Variables

```python
city = "Pune"
salary = 50000
```

Multiple assignment:

```python
a, b, c = 10, 20, 30
```

Same value to multiple variables:

```python
x = y = z = 100
```

---

# Dynamic Typing

Python automatically detects the variable type.

```python
age = 25
name = "Shubham"
height = 5.10
is_student = True
```

No need to specify data types manually.

---

# Checking Variable Type

Use the `type()` function.

```python
print(type(age))
```

Output:

```python
<class 'int'>
```

---

# Basic Data Types

| Data Type | Example |
|-----------|----------|
| int | 10 |
| float | 5.10 |
| str | "Python" |
| bool | True |

---

# Example Program

```python
name = "Shubham"
age = 32
height = 5.10
is_student = True

print(name)
print(age)
print(height)
print(is_student)

print(type(name))
print(type(age))
print(type(height))
print(type(is_student))
```

---

# Key Points

- Variables store values.
- Python is dynamically typed.
- Use meaningful variable names.
- Follow snake_case naming convention.
- Use `type()` to check the data type.

---

# Practice Questions

### Beginner

- Create variables for your name, age, city, and country.
- Print all variables.
- Print the data type of each variable.

### Intermediate

Create variables for:

- Product Name
- Price
- Quantity

Calculate the total price.

---

# Real-World Example

```python
customer_name = "Rahul"

product = "Laptop"

price = 55000

quantity = 2

total_amount = price * quantity

print(total_amount)
```

Output

```
110000
```

---

# Next Topic

➡️ Data Types