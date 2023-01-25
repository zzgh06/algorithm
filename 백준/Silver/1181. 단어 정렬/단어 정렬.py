n = int(input())
word = []
for i in range(n):
    word.append(input())
word_list = list(set(word)) # set은 딕셔너리로 묶이기 때문에 앞에 list 함수 사용

sort_word = []
for i in word_list:
    sort_word.append((len(i), i))
result = sorted(sort_word)

for len_word, word in result:
    print(word)