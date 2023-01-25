import sys

n = int(input())
numbers = []

for i in range(n): 
    numbers.append(int(sys.stdin.readline())) # 입력되는 정수를 numbers 리스트에 추가 

for i in sorted(numbers): # 이를 sorted 함수를 통해 오름차순으로 정렬
    print(i)