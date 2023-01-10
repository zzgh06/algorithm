T = int(input())
for t in range(1, T+1):
    numbers = list(map(int,input().split()))
    m = max(numbers)
    print(f"#{t} {m}")