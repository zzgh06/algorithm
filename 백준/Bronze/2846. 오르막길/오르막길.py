n = int(input())
load = list(map(int, input().split()))
res = []
temp = 0
for i in range(n-1):
    if load[i] < load[i+1]:
        temp += load[i+1] - load[i]
        if load[i] == n-1:
            res.append(temp)
    else:
        res.append(temp)
        temp = 0

print(max(res))