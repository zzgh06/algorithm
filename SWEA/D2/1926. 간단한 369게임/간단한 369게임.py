n = int(input())

for i in range(1, n+1):
    i = str(i)
    cnt = 0
    for j in range(len(i)):
        if i[j] == '3' or i[j] == '6' or i[j] == '9':
            cnt += 1
    if cnt == 0:
        print(i, end=' ')
    elif cnt != 0:
        print('-'*cnt, end=' ')