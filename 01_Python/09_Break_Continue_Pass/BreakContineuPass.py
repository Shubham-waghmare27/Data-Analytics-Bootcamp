"""
-----------------------------------------
Topic : Break, Continue & Pass
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# break
# ==========================

print("Break Example")

for i in range(1, 11):

    if i == 6:
        break

    print(i)

# ==========================
# continue
# ==========================

print("\nContinue Example")

for i in range(1, 11):

    if i == 6:
        continue

    print(i)

# ==========================
# pass
# ==========================

print("\nPass Example")

for i in range(1, 6):

    if i == 3:
        pass

    print(i)

# ==========================
# Practical Example
# ==========================

correct_password = "python123"

while True:

    password = input("Enter Password : ")

    if password == correct_password:
        print("Login Successful")
        break

    print("Wrong Password")