train = []
cnt = 0

for _ in range(4):
    n, m = map(int, input().split())
    cnt += m - n
    train.append(cnt)
print(max(train))