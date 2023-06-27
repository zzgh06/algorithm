import sys
input = sys.stdin.readline

n = int(input())

files = dict()

for _ in range(n):
    extends = input().rstrip().split('.')
  
    if extends[1] not in files:
        files[extends[1]] = 1
    else:
        files[extends[1]] += 1

files = sorted(files.items())

for key, value in files:
    print(key, value)
