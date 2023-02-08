numbers = []
for _ in range(5):
    numbers.append(int(input()))

num = sorted(numbers)

print(sum(num)//5)
print(num[2])
