T = int(input())

for tc in range(1, T+1):
    n = int(input())
    s = list(map(int, input().split()))
    sum = 0
    for i in s:
        sum += int(i)
    average = sum/n
    cnt = 0
    for j in s:
        if int(j) <= average:
            cnt += 1
    print(f'#{tc}', cnt)