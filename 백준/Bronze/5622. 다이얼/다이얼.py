s = input()
alp = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
time = 0

for char in range(len(s)):
    for i in alp:
        if s[char] in i:
            time += alp.index(i) + 3

print(time)