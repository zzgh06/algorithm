n = int(input())
exam = list(map(int, input().split()))
sum = 0
result = 0
for i in range(n):
    if exam[i] == 1:
        sum += 1
        result += sum
    else:
        sum = 0
print(result)