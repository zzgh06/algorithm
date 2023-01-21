num = [i for i in range(1, 31)]

for s in range(28):
    n = int(input())
    num.remove(n)
print(*num, sep='\n')
