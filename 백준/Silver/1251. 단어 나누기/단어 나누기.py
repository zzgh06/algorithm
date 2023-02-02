word = input()
result = []

for i in range(len(word) -2): # 길이가 1 이상인 3개의 단어로 구분해야함
    for j in range(i + 1, len(word) -1):
        for k in range(j + 1, len(word)):
            new_word = word[:j][::-1] + word[j:k][::-1] + word[k:][::-1] # 모든 경우의 수를 뒤집은 후(역슬라이싱) 합친다
            result.append(new_word) # 합친 new_word 변수를 result 리스트에 추가

res_word = sorted(result)

print(res_word[0])