total = 0
for num in range(5):
    n = int(input())
    if 40 > n:
        n = 40
    else:
        n = n
    total = total + n
print(int(total/5))