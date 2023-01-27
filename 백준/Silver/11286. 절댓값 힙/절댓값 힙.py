import sys
import heapq
input = sys.stdin.readline

n = int(input())
heap = []

for i in range(n):
    x = int(input())
    if x != 0:
        heapq.heappush(heap, (abs(x), x)) 
        # 절대 값을 기준으로 정렬되어야 하기 때문에, 튜플의 형태로 리스트에 추가하며, 
        # 튜플은 비교할 때 첫번째 원소를 기준으로 정렬하기 때문에 (절댓값, 실제 값) 튜플 형식으로 heap에 넣는다
        # print(heap) # [(1, -1), (1, -1), (1, -1), (1, 1), (1, 1), (1, 1), (2, 2), (2, -2)]
    else: # x 입력 값이 0 이면서
        if len(heap) != 0: # heap 리스트가 비어있지 않다면
            print(heapq.heappop(heap)[1]) 
            # 절댓값이 가장 작은 값을 출력하고 그 값을 배열에서 제거 
            # 이때 출력은 실제 값으로 해야하기 때문에 인덱스 [1]를 출력
        else:
            print(0) # heap 리스트가 비어있다면 0를 출력함