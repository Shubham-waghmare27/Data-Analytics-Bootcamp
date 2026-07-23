"""
-----------------------------------------
Topic : Operators
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# Arithmetic Operators
# ==========================

a = 20
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Modulus:", a % b)
print("Exponent:", a ** b)

# ==========================
# Comparison Operators
# ==========================

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)

# ==========================
# Assignment Operators
# ==========================

x = 10

x += 5
print(x)

x -= 2
print(x)

x *= 3
print(x)

x /= 2
print(x)

# ==========================
# Logical Operators
# ==========================

age = 22
is_student = True

print(age > 18 and is_student)
print(age > 18 or is_student)
print(not is_student)

# ==========================
# Membership Operators
# ==========================

languages = ["Python", "JavaScript", "SQL"]

print("Python" in languages)
print("Java" not in languages)

# ==========================
# Identity Operators
# ==========================

a = [1, 2]
b = a
c = [1, 2]

print(a is b)
print(a is c)

print(a is not c)