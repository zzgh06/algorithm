mod = []

for i in range(10):
    n = int(input())
    mod.append(n % 42)

print(len(set(mod)))
