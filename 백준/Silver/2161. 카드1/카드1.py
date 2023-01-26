n = int(input())
card_list = [i for i in range(1, n + 1)]
trash = []

while len(card_list) > 1:
    trash.append(card_list.pop(0))
    card_list.append(card_list.pop(0))

print(*trash, card_list[0])
