"""
===========================================
Topic    : Python Type Conversion
Author   : Shubham Waghmare
Bootcamp : Data Analytics Bootcamp
===========================================

Description:
This program demonstrates how to convert one data type into another.
"""

# -----------------------------
# Integer to Float
# -----------------------------
age = 32
age_float = float(age)

print("Integer to Float")
print(age)
print(age_float)
print(type(age_float))

print("-" * 40)

# -----------------------------
# Float to Integer
# -----------------------------
price = 199.99
price_int = int(price)

print("Float to Integer")
print(price)
print(price_int)
print(type(price_int))

print("-" * 40)

# -----------------------------
# Integer to String
# -----------------------------
marks = 95
marks_str = str(marks)

print("Integer to String")
print(marks)
print(marks_str)
print(type(marks_str))

print("-" * 40)

# -----------------------------
# String to Integer
# -----------------------------
num = "100"
num_int = int(num)

print("String to Integer")
print(num)
print(num_int)
print(type(num_int))

print("-" * 40)

# -----------------------------
# String to Float
# -----------------------------
height = "5.10"
height_float = float(height)

print("String to Float")
print(height_float)
print(type(height_float))

print("-" * 40)

# -----------------------------
# Integer to Boolean
# -----------------------------
value = 1

print("Integer to Boolean")
print(bool(value))

print("-" * 40)

# -----------------------------
# Boolean to Integer
# -----------------------------
status = True

print("Boolean to Integer")
print(int(status))

print("-" * 40)

print("Type Conversion Completed Successfully!")