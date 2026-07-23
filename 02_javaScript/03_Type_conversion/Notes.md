# 📘 Type Conversion in JavaScript

## 📖 What is Type Conversion?

Type conversion is the process of converting one data type into another.

---

# 🎯 Why is Type Conversion Important?

- Handle user input
- Read API data
- Process calculations
- Convert values into the required format

---

# 📝 Number()

Converts a value into a number.

```javascript
Number("25")
```

---

# 📝 parseInt()

Converts a string into an integer.

```javascript
parseInt("85")
```

---

# 📝 parseFloat()

Converts a string into a decimal number.

```javascript
parseFloat("85.50")
```

---

# 📝 String()

Converts any value into a string.

```javascript
String(100)
```

---

# 📝 Boolean()

Converts a value into a boolean.

```javascript
Boolean(1)
Boolean(0)
Boolean("")
```

---

# 📊 Common Type Conversions

| From | To | Method |
|------|----|---------|
| String | Number | Number() |
| String | Integer | parseInt() |
| String | Float | parseFloat() |
| Number | String | String() |
| Number | Boolean | Boolean() |
| Boolean | Number | Number() |

---

# 🌍 Real-World Example

Data from an HTML form is always received as a string.

```javascript
let age = "25";

age = Number(age);

console.log(age + 5);
```

Output:

```
30
```

---

# 💡 Best Practices

- Use `Number()` for complete numeric conversion.
- Use `parseInt()` for whole numbers.
- Use `parseFloat()` for decimal values.
- Validate user input before converting.

---

# ⚠ Common Mistakes

- Forgetting that form inputs return strings.
- Using `parseInt()` for decimal numbers.
- Assuming every string can be converted to a number.

---

# 💻 Example Program

Convert:

- String → Number
- String → Float
- Number → String
- Number → Boolean
- Boolean → Number

---

# 📝 Practice Questions

1. Convert `"150"` into a number.

2. Convert `"75.50"` into a float.

3. Convert `500` into a string.

4. Convert `0` into a boolean.

5. Convert `true` into a number.

---

# 🎯 Interview Questions

1. Difference between `Number()` and `parseInt()`?

2. What does `parseFloat()` do?

3. Why is type conversion necessary?

4. What happens when `Number("abc")` is used?

---

# 📌 Summary

- Type Conversion
- Number()
- parseInt()
- parseFloat()
- String()
- Boolean()

---

# 🚀 Next Topic

➡ 04 - User Input