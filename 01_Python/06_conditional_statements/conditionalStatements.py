"""
-----------------------------------------
Topic : Conditional Statements
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# if Statement
# ==========================

age = 20

if age >= 18:
    print("You are eligible to vote.")

# ==========================
# if...else Statement
# ==========================

marks = 45

if marks >= 35:
    print("Pass")
else:
    print("Fail")

# ==========================
# if...elif...else Statement
# ==========================

score = 82

if score >= 90:
    print("Grade A")
elif score >= 75:
    print("Grade B")
elif score >= 60:
    print("Grade C")
else:
    print("Grade D")

# ==========================
# Nested if
# ==========================

age = 22
has_license = True

if age >= 18:
    if has_license:
        print("You can drive.")
    else:
        print("License required.")
else:
    print("Not eligible to drive.")

# ==========================
# Logical Operators with if
# ==========================

username = "admin"
password = "1234"

if username == "admin" and password == "1234":
    print("Login Successful")
else:
    print("Invalid Credentials")