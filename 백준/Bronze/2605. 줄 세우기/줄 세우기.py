n = int(input())
students = list(map(int, input().split()))
arr = []

for i in range(n): # 0~4
    arr.insert(students[i], i+1)

print(*arr[::-1])