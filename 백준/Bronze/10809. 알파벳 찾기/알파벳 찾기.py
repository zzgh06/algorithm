s = input() # 첫째 줄에 단어 S가 주어진다
alpha ='abcdefghijklmnopqrstuvwxyz'

for i in alpha:
    if i in s:
        print(s.index(i), end=" ")
    else:
        print('-1', end=" ")