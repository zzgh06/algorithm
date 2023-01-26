T = int(input())

for i in range(T):
    c = int(input())
    money = [25, 10, 5, 1]
    change = []
    
    for j in money:
        change.append(c // j)
        c = c % j
    print(*change)