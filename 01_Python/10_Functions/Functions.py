"""
-----------------------------------------
Topic : Functions
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# Basic Function
# ==========================

def greet():
    print("Welcome to Python!")

greet()

# ==========================
# Function with Parameters
# ==========================

def greet_user(name):
    print(f"Hello, {name}")

greet_user("Shubham")

# ==========================
# Multiple Parameters
# ==========================

def student(name, age):
    print(f"Name : {name}")
    print(f"Age : {age}")

student("Rahul", 22)

# ==========================
# Function Returning Value
# ==========================

def add(a, b):
    return a + b

result = add(10, 20)

print("Sum :", result)

# ==========================
# Default Parameter
# ==========================

def country(name, country="India"):
    print(name, "belongs to", country)

country("Shubham")
country("John", "USA")