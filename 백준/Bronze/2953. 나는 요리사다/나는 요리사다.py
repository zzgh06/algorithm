score = [ list(map(int, input().split())) for _ in range(5) ]
score_total = []

for i in range(5):
    total = 0
    for j in range(4):
        total += score[i][j]
    score_total.append(total)

print(score_total.index(max(score_total)) + 1, max(score_total))