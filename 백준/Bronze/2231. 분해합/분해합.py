n = int(input())
total = 0
for i in range(1, n +1):
    m = list(map(int, str(i)))
    total = i + sum(m)
    if total == n:
        print(i)
        break
    if i == n:
        print(0)