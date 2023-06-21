n = int(input())

for i in range(1, n+1):
    num = sum(map(int, str(i)))
    total = i + num # 분해합 = 생성자 + 각 자릿수의 합
    # i가 작은 수부터 차례로 들어가므로 처음으로 분해합과 입력값이 같을때가 가장 작은 생성자를 가짐
    if total == n:
        print(i)
        break
    elif i == n: # 생성자 i와 입력값이 같다는 것은 생성자가 없다는 뜻
        print(0)