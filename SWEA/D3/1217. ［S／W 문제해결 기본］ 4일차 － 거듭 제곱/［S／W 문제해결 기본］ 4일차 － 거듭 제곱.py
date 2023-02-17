for tc in range(1, 11):
    T = int(input())
    n, m = map(int, input().split())
    print(f'#{tc}', n**m)