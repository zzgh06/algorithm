T = int(input())

for tc in range(1, T+1):
    p, q, r, s, w = map(int, input().split())
    if w > r:
        A = w*p
        B = q + (w-r)*s
    else:
        A = w*p
        B = q

    if A > B:
        print(f'#{tc}', B)
    else:
        print(f'#{tc}', A)