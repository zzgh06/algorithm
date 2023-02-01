T = int(input())

for t in range(T):
    numbers = list(map(int, input().split()))
    numbers.pop(numbers.index(max(numbers)))
    numbers.pop(numbers.index(min(numbers)))
    
    if max(numbers) - min(numbers) >= 4:
        print('KIN')
    else:
        print(sum(numbers))