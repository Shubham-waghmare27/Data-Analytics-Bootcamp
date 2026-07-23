"""
-----------------------------------------
Topic : User Input
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# Taking String Input
# ==========================

name = input("Enter your name: ")

print("Hello,", name)

# ==========================
# Taking Integer Input
# ==========================

age = int(input("Enter your age: "))

print("Your age is:", age)

# ==========================
# Taking Float Input
# ==========================

height = float(input("Enter your height (in feet): "))

print("Your height is:", height)

# ==========================
# Taking Boolean Input
# ==========================

is_student = input("Are you a student? (True/False): ")

is_student = is_student.lower() == "true"

print("Student:", is_student)

# ==========================
# Multiple Inputs
# ==========================

city = input("Enter your city: ")
course = input("Enter your course: ")

print("\n----- Student Information -----")
print("Name :", name)
print("Age :", age)
print("Height :", height)
print("Student :", is_student)
print("City :", city)
print("Course :", course)