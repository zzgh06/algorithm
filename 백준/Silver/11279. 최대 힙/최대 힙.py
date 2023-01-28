import sys
import heapq

n = int(input())
heap = []

# Max Heap
for _ in range(n):
    x = int(sys.stdin.readline())
    if x != 0:
        heapq.heappush(heap, (-x))
    else:
        if len(heap) == 0:
            print(0)
        else:   
            print(-1 * heapq.heappop(heap))