T = int(input()) # 첫째 줄에 테스트 케이스의 개수 T
s_l = []
for t in range(T):
    r, s = input().split() # 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다
    text = '' 
    for i in s:
        text += i * int(r)
    print(text)