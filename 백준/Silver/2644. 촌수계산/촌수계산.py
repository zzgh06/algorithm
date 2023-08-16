n = int(input())
a, b = map(int, input().split())
m = int(input())
graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)
stack = []

for _ in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x) 

def dfs(start, num):
    num += 1
    visited[start] = True
    
    if start == b:
        stack.append(num)
    
    for adj in graph[start]:
        if not visited[adj]:
            dfs(adj, num)

dfs(a, 0)

if len(stack) == 0:
    print(-1)
else:
    print(stack[0]-1)