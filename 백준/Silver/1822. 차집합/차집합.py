a, b = map(int, input().split())

a_set = set(list(map(int, input().split())))
b_set = set(list(map(int, input().split())))

res = a_set - b_set

sort_res = sorted(res)
print(len(sort_res))

if len(sort_res) != 0:
    print(*sort_res)