matrix = [sum(list(map(int, input().split()))) for _ in range(5)]

print(matrix.index(max(matrix)) + 1, max(matrix))