import sys
input = sys.stdin.readline

n = int(input())
matrix = [[0] * 101 for _ in range(101)]

for _ in range(n):
    x, y = map(int, input().split())
    for i in range(x, x+10):
        for j in range(y, y+10):
            matrix[i][j] = 1

result = 0

for a in matrix:
    result += a.count(1)

print(result)