# 13
number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
print(result)

# 14
number = 5
result = 1

for factor in range(1, number + 1):
    result *= factor
print(result)

# 15
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print(f"{rating} é múltiplo de 3")
