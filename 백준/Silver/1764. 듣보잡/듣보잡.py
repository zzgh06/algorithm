n, m = map(int, input().split())
a = set()
b = set()

for _ in range(n):
    a.add(input()) # set에 요소를 추가할 때는 add 메서드 사용
for _ in range(m):
    b.add(input())

result = sorted(list(a & b)) # 교집합을 통해 중복된 값을 변수 저장
print(len(result))

for i in result:
    print(i)