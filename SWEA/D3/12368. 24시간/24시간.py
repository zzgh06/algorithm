T = int(input())

for tc in range(1, T+1):
    a, b = map(int, input().split())
    if a+b >= 24:
        print(f'#{tc}', (a+b)-24)
    else:
        print(f'#{tc}', a+b)