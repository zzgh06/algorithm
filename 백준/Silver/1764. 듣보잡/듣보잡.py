n, m = map(int, input().split())
a = set()
b = set()

for i in range(n):
    a.add(input())

for i in range(m):
    b.add(input())

res = sorted(list(a & b))
print(len(res))

for i in res:
    print(i)