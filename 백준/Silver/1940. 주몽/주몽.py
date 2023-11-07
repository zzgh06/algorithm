n = int(input())
m = int(input())
arr = list(map(int, input().split()))
i = 0
j = n - 1
cnt = 0

arr.sort()

while i < j:
    if arr[i] + arr[j] < m:
        i += 1
    elif arr[i] + arr[j] > m:
        j -= 1
    else:
        cnt += 1
        i += 1
        j -= 1

print(cnt)