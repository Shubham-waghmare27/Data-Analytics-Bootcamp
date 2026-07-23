# 📘 User Input in Python

## 📖 What is User Input?

User input allows a program to receive data from the user while it is running.

Instead of using fixed values, we can ask the user to enter information such as their name, age, salary, or city.

---

# 🎯 Why Do We Use User Input?

- Make programs interactive
- Accept dynamic data
- Avoid hardcoded values
- Build real-world applications

---

# 📝 input() Function

The `input()` function is used to accept input from the user.

```python
name = input("Enter your name: ")
```

---

# 📌 Important Note

The `input()` function **always returns a string**.

```python
age = input("Enter age: ")

print(type(age))
```

Output

```
<class 'str'>
```

---

# 📝 Integer Input

```python
age = int(input("Enter age: "))
```

---

# 📝 Float Input

```python
height = float(input("Enter height: "))
```

---

# 📝 Boolean Input

```python
is_student = input("Are you a student? ")

is_student = is_student.lower() == "true"
```

---

# 🌍 Real-World Example

```python
name = input("Enter Name: ")
fees = float(input("Enter Fees: "))

print(name)
print(fees)
```

---

# 💡 Best Practices

- Use meaningful prompts.
- Convert data into the required type.
- Validate user input whenever possible.

---

# ⚠ Common Mistakes

### Forgetting Type Conversion

```python
age = input("Age: ")

print(age + 5)
```

❌ Error

Correct

```python
age = int(input("Age: "))
```

---

# 💻 Example Program

Take name, age and city from the user and display them.

---

# 📝 Practice Questions

1. Take your name as input.
2. Take your age and print it.
3. Take your height.
4. Take your favourite programming language.
5. Create a simple Student Information program.

---

# 🎯 Interview Questions

1. What does `input()` return?
2. Why do we use `int(input())`?
3. Difference between `input()` and `print()`?

---

# 📌 Summary

- input()
- String Input
- Integer Input
- Float Input
- Boolean Input
- Type Conversion

---

# 🚀 Next Topic

➡ **05 - Operators**