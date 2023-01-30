matrix = []

for _ in range(4):
    num = list(map(int, input().split()))
    for i in range(num[0], num[2]):
        for j in range(num[1], num[3]):
            matrix.append((i, j))

print(len(set(matrix)))