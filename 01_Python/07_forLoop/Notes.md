# 📘 For Loop in Python

## 📖 What is a For Loop?

A `for` loop is used to execute a block of code repeatedly for each item in a sequence or for a specified range.

---

# 🎯 Why Do We Use For Loops?

- Reduce repetitive code
- Iterate through sequences
- Process collections of data
- Build efficient programs

---

# Syntax

```python
for variable in sequence:
    # code
```

---

# range() Function

```python
range(stop)
range(start, stop)
range(start, stop, step)
```

Example

```python
for i in range(5):
    print(i)
```

---

# Loop Through String

```python
name = "Python"

for ch in name:
    print(ch)
```

---

# Loop Through List

```python
languages = ["Python", "JavaScript"]

for language in languages:
    print(language)
```

---

# Nested Loop

A loop inside another loop.

---

# Best Practices

- Use meaningful variable names.
- Avoid unnecessary nested loops.
- Keep loops simple and readable.

---

# Common Mistakes

- Incorrect indentation.
- Wrong `range()` values.
- Infinite loops (in `while`, not `for`).

---

# Practice Questions

1. Print numbers from 1 to 10.
2. Print even numbers.
3. Print odd numbers.
4. Print each character of your name.
5. Print all items in a list.

---

# Interview Questions

1. What is `range()`?
2. Difference between `for` and `while`?
3. What is a nested loop?

---

# Summary

- for loop
- range()
- String iteration
- List iteration
- Nested loop

---

# Next Topic

➡ 08 - While Loop