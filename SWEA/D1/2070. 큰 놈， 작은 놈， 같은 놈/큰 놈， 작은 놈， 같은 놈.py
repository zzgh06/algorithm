T = int(input())
for t in range(1, T+1):
    a, b = list(map(int,input().split()))
    if a < b:
        print(f"#{t} <")
    elif a == b:
        print(f"#{t} =")
    elif a > b:
        print(f"#{t} >")