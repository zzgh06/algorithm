A, B = input().split()

a, b = list(map(int, A)), list(map(int, B))
# print(a) # [1, 2, 3]
# print(b) # [4, 5]

print(sum(a) * sum(b))