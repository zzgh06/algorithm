str = input()
alpha = 'CAMBRIDGE'

for i in alpha:
    if i in str:
        str = str.replace(i, '')
print(str)