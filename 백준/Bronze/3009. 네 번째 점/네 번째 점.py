x_list = []
y_list = []
for i in range(3):
    x, y = map(int, input().split())
    x_list.append(x)
    y_list.append(y)

for i in range(3):
    if x_list.count(x_list[i]) == 1:
        result1 = x_list[i]
    elif y_list.count(y_list[i]) == 1:
        result2 = y_list[i]
print(result1, result2)
