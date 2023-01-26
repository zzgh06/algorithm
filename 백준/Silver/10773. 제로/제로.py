import sys

k = int(input())
numbers = []

for i in range(k):
    num = int(sys.stdin.readline())
    if num == 0:
        numbers.pop()
    else:
        numbers.append(num)

print(sum(numbers))