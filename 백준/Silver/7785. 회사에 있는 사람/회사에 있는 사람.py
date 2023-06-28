import sys
input = sys.stdin.readline

# 딕셔너리
n = int(input())
office = {}

for _ in range(n):
    name, log = map(str, input().split())
    if log == 'enter':
        office[name] = 'enter'
    else:
        del office[name]
office = sorted(office.keys(), reverse=True)

for i in office:
    print(i)