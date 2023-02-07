import sys
input = sys.stdin.readline


n = int(input())
stack = []

[stack.append(int(input())) for _ in range(n)]  # [6, 9, 7, 6, 4, 6]

last = stack[-1]
cnt = 1

for i in reversed(range(n)):
    if stack[i] > last:
        cnt += 1
        last = stack[i]
        
print(cnt)