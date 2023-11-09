def myadd(c): 
    global chkList, myList, chkSecret
    if c == 'A':
        myList[0] += 1
        if myList[0] >= chkList[0]:
            chkSecret[0] = 1
    elif c == 'C':
        myList[1] += 1
        if myList[1] >= chkList[1]:
            chkSecret[1] = 1
    elif c == 'G':
        myList[2] += 1
        if myList[2] >= chkList[2]:
            chkSecret[2] = 1
    elif c == 'T':
        myList[3] += 1
        if myList[3] >= chkList[3]:
            chkSecret[3] = 1

def myremove(c): 
    global chkList, myList, chkSecret
    if c == 'A':
        myList[0] -= 1
        if myList[0] < chkList[0]:
            chkSecret[0] = 0
    elif c == 'C':
        myList[1] -= 1
        if myList[1] < chkList[1]:
            chkSecret[1] = 0
    elif c == 'G':
        myList[2] -= 1
        if myList[2] < chkList[2]:
            chkSecret[2] = 0
    elif c == 'T':
        myList[3] -= 1
        if myList[3] < chkList[3]:
            chkSecret[3] = 0

s, p = map(int, input().split())
res = 0
arr = list(input())
chkList = list(map(int, input().split()))

chkSecret = [0] * 4
myList = [0] * 4

for i in range(4):
    if chkList[i] == 0:
        chkSecret[i] = 1

for i in range(p): 
    myadd(arr[i])

if sum(chkSecret) == 4:
    res += 1

for i in range(p, s):
    j = i - p
    myadd(arr[i])
    myremove(arr[j])
    if sum(chkSecret) == 4:
        res += 1

print(res)