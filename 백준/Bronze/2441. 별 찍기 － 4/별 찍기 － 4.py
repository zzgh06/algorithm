n = int(input())
[print(' ' * (i - 1) + '*' * (n - i + 1)) for i in range(1, n + 1)]