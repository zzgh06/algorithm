matrix = [input() for i in range(5)]

for j in range(15): # 최대 15개의 글자들이 빈칸 없이 연속으로 주어짐
    for i in range(5): 
        if j < len(matrix[i]): # 조건문에 의해 j가 0 ~ 4 행의 범위만큼(?) 출력되게 함
            print(matrix[i][j], end = '')