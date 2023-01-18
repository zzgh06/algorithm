T = int(input())

for t in range(T):
    word = list(input().split())
    for w in word:
        print(w[::-1], end=" ")