students = []

for _ in range(int(input())):
    x, y = map(int, input().split())
    students.append((x, y))  # 튜플의 형태로 저장

for i in students:
    rank = 1  # 더 덩치 큰 사람이 k명이라면 k+1이기 때문에 1부터 비교
    for j in students:
        if i[0] < j[0] and i[1] < j[1]:  # 0번째 튜플 값과 0~4번째 튜플 값을 순회하며 비교하고 더 클 경우
            rank += 1  # rank 변수에 1를 더한다

    print(rank, end=' ')