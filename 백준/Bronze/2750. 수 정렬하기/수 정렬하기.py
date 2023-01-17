n = int(input())
num_list = []

for i_1 in range(n):
    num_list.append(int(input()))
num_list = sorted(num_list)

for i_2 in range(len(num_list)):
    print(num_list[i_2])