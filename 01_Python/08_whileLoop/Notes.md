"""
-----------------------------------------
Topic : While Loop
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# Basic While Loop
# ==========================

count = 1

while count <= 5:
    print(count)
    count += 1

# ==========================
# Print Even Numbers
# ==========================

num = 2

while num <= 10:
    print(num)
    num += 2

# ==========================
# Countdown
# ==========================

count = 5

while count > 0:
    print(count)
    count -= 1

print("Blast Off! 🚀")

# ==========================
# User Input Example
# ==========================

password = ""

while password != "python123":
    password = input("Enter Password: ")

print("Access Granted!")

# ==========================
# Infinite Loop Example
# ==========================

# while True:
#     print("This runs forever!")