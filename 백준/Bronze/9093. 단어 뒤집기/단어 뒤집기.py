T = int(input())

for t in range(T):
    word = list(map(str, input().split()))
    reverse_word = []

    for w in word:
        reverse_word.append(w[::-1])
    
    answer = " ".join(reverse_word)
    print(answer)