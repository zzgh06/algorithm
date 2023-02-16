T = int(input())

for tc in range(1, T+1):
    str = input()

    gather = ['a', 'e', 'i', 'o', 'u']
    for i in gather:
        if i in str:
            str = str.replace(i, '')
    print(f'#{tc}', str)