word = input().upper() # 대소문자로 된 단어가 주어지지만 대문자와 소문자를 구분하지 않기 때문에 upper 혹은 lower 를 통해 입력 값을 대문자 혹은 소문자로 변경한다
word_list = list(set(word)) # 그리고 반복문에서 중복된 단어를 제외하여 순회하기 위해 set 함수를 통해 중복된 요소를 제거한다.
cnt = []

for i in word_list: # 입력값 중 중복된 단어는 제외하여 순회
    cnt.append(word.count(i))

if cnt.count(max(cnt)) > 1: # cnt 리스트 중 가장 큰 값이 1개보다 많을 경우 
    print('?') # '?'를 출력
else:
    print(word_list[(cnt.index(max(cnt)))])