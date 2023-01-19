n = int(input())
worker_dict = {}

for i in range(n):
    name, log = map(str, input().split())
    worker_dict[name] = log
    if log == 'leave':
        del worker_dict[name]

dict_sort = sorted(worker_dict.items(), reverse = True)
worker_dict = dict(dict_sort) # dict( key = value, key = value)

for key in worker_dict.keys():
    print(key)