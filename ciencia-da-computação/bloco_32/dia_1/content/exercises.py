# 1
def maior(a, b):
    if b > a:
        return b
    return a


print(maior(4, 5))

# 2


def media(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(media([2, 3, 6, 9]))

# 3


def quadrado(number):
    for coluna in range(number):
        print(number * '*')


print(quadrado(5))

# 4


def maior_nome(names):
    maior = names[0]
    for name in names:
        if len(name) > len(maior):
            maior = name
    return maior


print(maior_nome(("aaaa", "bbb", "ccccc")))
