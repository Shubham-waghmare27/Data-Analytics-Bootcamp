"""
-----------------------------------------
Topic : For Loop
Language : Python
Bootcamp : Data Analytics Bootcamp
Author : Shubham Waghmare
-----------------------------------------
"""

# ==========================
# Basic for Loop
# ==========================

for i in range(5):
    print(i)

# ==========================
# Custom Range
# ==========================

for i in range(1, 6):
    print(i)

# ==========================
# Step Value
# ==========================

for i in range(0, 11, 2):
    print(i)

# ==========================
# Reverse Loop
# ==========================

for i in range(10, 0, -1):
    print(i)

# ==========================
# Loop Through String
# ==========================

name = "Shubham"

for char in name:
    print(char)

# ==========================
# Loop Through List
# ==========================

languages = ["Python", "JavaScript", "SQL"]

for language in languages:
    print(language)

# ==========================
# Nested Loop
# ==========================

for row in range(3):
    for col in range(3):
        print(f"({row}, {col})")