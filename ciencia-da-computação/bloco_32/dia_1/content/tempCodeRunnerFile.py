def media(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(media([2, 3, 6, 9]))