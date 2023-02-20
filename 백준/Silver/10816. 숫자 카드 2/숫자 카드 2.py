import sys
input = sys.stdin.readline
n = int(input())
cards = list(map(int, input().split()))
m = int(input())
cnt_card = list(map(int, input().split()))

card_list = {}
for card in cards:
    if card not in card_list:
        card_list[card] = 1
    else:
        card_list[card] += 1
# print(cnt_card) {6: 1, 3: 2, 2: 1, 10: 3, -10: 2, 7: 1}
for i in cnt_card:
    result = card_list.get(i) # GET 함수 : 딕셔너리의 get(x) 함수는 x라는 key에 대응되는 value값을 돌려준다.
    if result == None:
        print(0, end=" ")
    else:
        print(result, end=" ")
