n = int(input())
customer = list(map(int, input().split()))
cnt = 0 # 거절당하는 수
seat = [] # 자리

for i in range(n): 
    if customer[i] not in seat: # 손님이 원하는 자리 번호가 seat 리스트 안에 없다면
        seat.append(customer[i]) # seat 리스트에 추가
    else:
        cnt += 1 # 그렇지 않은 경우 cnt 변수에 1를 추가

print(cnt)