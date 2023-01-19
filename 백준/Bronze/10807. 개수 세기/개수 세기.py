cnt = 0
num = int(input())
numbers = map(int, input().split())
v = int(input())
for i in numbers:
    if i == v:
        cnt += 1
print(cnt)