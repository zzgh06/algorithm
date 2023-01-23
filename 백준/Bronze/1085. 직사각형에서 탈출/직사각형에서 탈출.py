x, y, w, h = list(map(int, input().split()))

print(min(x, y, h - y, w - x))