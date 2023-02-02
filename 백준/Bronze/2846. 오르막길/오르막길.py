n = int(input())
height = list(map(int, input().split()))
temp = 0 # 임시저장 변수
a = [] # 오르막길 차이를 저장할 리스트

for i in range(1, n):
    if height[i] > height[i - 1]:
        temp += height[i] - height[i - 1] # (뒷길의 높이 - 앞길 높이)
        if i == n - 1: # 이전 높이보다 높으면서 마지막 위치라면
            a.append(temp) # a 리스트에 temp 변수 값을 저장한다
    else:
        a.append(temp) # 이전 높이보다 크지 않을 때, temp 변수 값을 a 리스트에 추가하고
        temp = 0 # temp 변수를 초기화

print(max(a)) # a 리스트에 저장된 점수 중 가장 큰 값을 출력