n, k = map(int, input().split())
x = list(map(int, input().split()))

cut = sorted(x)
cut.reverse()
print(cut[k-1])