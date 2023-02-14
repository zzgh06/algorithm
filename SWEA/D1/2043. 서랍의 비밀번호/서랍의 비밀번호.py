p, k = map(int, input().split())
cnt = 0
for i in range(p-k+1):
    cnt += 1
print(cnt)