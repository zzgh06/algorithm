import sys
t = int(input())

for i in range(t):
    ps = sys.stdin.readline()
    stack = []
    for j in ps:
        if j == '(':
            stack.append(j)
        elif j == ')':
            if stack:
                stack.pop()
            else:
                print('NO')
                break
    else:
        if len(stack) == 0:
            print('YES')
        else:
            print('NO')