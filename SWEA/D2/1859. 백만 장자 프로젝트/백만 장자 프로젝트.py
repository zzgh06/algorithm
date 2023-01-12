T = int(input())
for t in range(1, T+1):
    N = int(input())
    n_list = list(map(int, input().split()))
    sell_price = 0
    maximum_profit = 0

    for max_price in n_list[::-1]:
        if max_price >= sell_price:
            sell_price = max_price
        else:
            maximum_profit += sell_price - max_price
    print(f'#{t} {maximum_profit}')