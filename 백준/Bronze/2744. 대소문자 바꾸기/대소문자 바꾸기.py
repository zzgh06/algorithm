char = ''
for s in input():
    if s.islower():
        char += s.upper()
    else:
        char += s.lower()
print(char)