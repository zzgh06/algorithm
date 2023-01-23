n = int(input())
a = list(map(int,input().split()))
m = max(a)
total = 0
for i in range(n):
    total += a[i] / m * 100
print(total/n)