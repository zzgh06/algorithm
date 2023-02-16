T = int(input())

for tc in range(1, T+1):
    l, u, x = map(int, input().split())
    if l <= x <= u:
        print(f'#{tc}', 0)
    elif x < l:
        print(f'#{tc}', l-x)
    else:
        print(f'#{tc}', -1)