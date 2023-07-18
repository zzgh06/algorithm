arr = [[] for _ in range(15)]

for _ in range(5):
    words = input()
    for i in range(len(words)):
        arr[i].append(words[i])

result = ''

for i in range(len(arr)):
    result += ''.join(arr[i])
print(result)