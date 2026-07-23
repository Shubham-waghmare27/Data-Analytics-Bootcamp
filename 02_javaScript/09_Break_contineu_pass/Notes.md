# 📘 Break & Continue in JavaScript

## 📖 What is break?

The `break` statement immediately exits the nearest loop.

Example

```javascript
for (let i = 0; i < 10; i++) {

    if (i === 5)
        break;

    console.log(i);
}
```

---

# 📖 What is continue?

The `continue` statement skips the current iteration and moves to the next one.

Example

```javascript
for (let i = 0; i < 5; i++) {

    if (i === 2)
        continue;

    console.log(i);
}
```

---

# Does JavaScript have pass?

❌ No.

JavaScript does **not** have a `pass` keyword.

If you want an empty block, simply leave it empty or add a comment.

Example

```javascript
if (true) {
    // TODO
}
```

---

# Difference

| Keyword | Purpose |
|----------|----------|
| break | Exit loop |
| continue | Skip current iteration |

---

# Best Practices

- Use `break` carefully.
- Use `continue` only when it improves readability.
- Avoid unnecessary nested loops.

---

# Common Mistakes

- Confusing `break` with `continue`.
- Expecting a `pass` keyword like Python.

---

# Practice Questions

1. Stop loop at 20.
2. Skip number 5.
3. Password validation.
4. Skip odd numbers.
5. Print only multiples of 3.

---

# Interview Questions

1. Difference between `break` and `continue`?
2. Does JavaScript support `pass`?
3. Why do we use `break`?

---

# Summary

- break
- continue
- Empty block

---

# Next Topic

➡ 10 - Functions