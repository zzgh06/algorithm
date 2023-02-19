import sys
input = sys.stdin.readline

f_list = {}
for _ in range(int(input())):
    f = (input().split('.'))[1] # 입력값을 '.'을 기준으로 분리하면 리스트 형태로 저장되어([sbrus, txt]) 그 중 확장자를 의미하는 1번째 인덱스 값을 변수 f에 저장
    if f not in f_list: # 변수 f 값이 빈 딕셔너리 안에 없다면
        f_list[f] = 1 # 딕셔너리에 저장
    else:
        f_list[f] += 1 # 존재할 경우, value 값에 1씩 더함.

sort_file = sorted(f_list.items()) # 딕셔너리 정렬할 때, items 메서드를 사용하여 저장해야됨

for key, value in sort_file:
    print(key.rstrip(), value)