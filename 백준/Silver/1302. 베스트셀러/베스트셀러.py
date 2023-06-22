import sys
input = sys.stdin.readline

n = int(input())
sell = {}

for i in range(n):
    book = input()
    if book not in sell:
        sell[book] = 1
    else:
        sell[book] += 1

max_value = max(sell.values())

best = []

for key, value in sell.items():
    if value == max_value:
        best.append(key)
best = sorted(best)
print(best[0])