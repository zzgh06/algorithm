import sys
input = sys.stdin.readline

a = list(map(int, input().split()))
b = list(map(int, input().split()))
a_total = 0
b_total = 0
winner = ' '

for i in range(10):
    if a[i] > b[i]:
        a_total += 3; winner = 'A'
    elif a[i] < b[i]:
        b_total += 3; winner = 'B'
    else:
        a_total += 1; b_total += 1
print(a_total, b_total)

if a_total > b_total:
    print('A')
elif a_total < b_total:
    print('B')
elif a_total == b_total:
    if winner == ' ':
        print('D')
    else:
        print(winner)