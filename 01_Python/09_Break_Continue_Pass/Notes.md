# 📘 Break, Continue & Pass in Python

## 📖 What is break?

The `break` statement immediately terminates the nearest loop.

Example

```python
for i in range(10):

    if i == 5:
        break

    print(i)
```

Output

```
0
1
2
3
4
```

---

# 📖 What is continue?

The `continue` statement skips the current iteration and moves to the next iteration.

```python
for i in range(5):

    if i == 2:
        continue

    print(i)
```

Output

```
0
1
3
4
```

---

# 📖 What is pass?

`pass` is a placeholder statement.

It does nothing.

Python requires indentation after statements like:

- if
- for
- while
- function
- class

If you don't want to write code yet, use `pass`.

Example

```python
if True:
    pass
```

---

# Difference

| Keyword | Purpose |
|----------|----------|
| break | Exit loop |
| continue | Skip current iteration |
| pass | Do nothing |

---

# Best Practices

- Use `break` only when needed.
- Use `continue` to skip unwanted data.
- Use `pass` as a temporary placeholder.

---

# Common Mistakes

- Confusing `break` and `continue`.
- Using `pass` expecting it to skip the loop.

---

# Practice Questions

1. Stop loop at 20.
2. Print all numbers except 5.
3. Create an empty function using `pass`.
4. Password validation using `break`.
5. Skip odd numbers using `continue`.

---

# Interview Questions

1. Difference between `break`, `continue` and `pass`?
2. Why do we use `pass`?
3. Can `pass` terminate a loop?

---

# Summary

- break
- continue
- pass

---

# Next Topic

➡ 10 - Functions