from collections import deque
n, l = map(int, input().split())
mydeque = deque()
now = list(map(int, input().split()))

for i in range(n):
    while mydeque and mydeque[-1][0] > now[i]: # mydeque에 원소가 존재하면서, mydeque에 마지막 위치의 값이 현재 들어오는 값보다 클 경우 제거
        mydeque.pop()
    mydeque.append((now[i], i))
    if mydeque[0][1] <= i - l:
        mydeque.popleft()
    print(mydeque[0][0], end=' ')