stack = []

while True:
    s = input()
    if s == '문제':
        stack.append(s)
    elif s == '고무오리':
        if not stack:
            stack.append('문제')
            stack.append('문제')
        else:
            stack.pop()
    if s == '고무오리 디버깅 끝':
        break

if not stack:
    print('고무오리야 사랑해')
else:
    print('힝구')