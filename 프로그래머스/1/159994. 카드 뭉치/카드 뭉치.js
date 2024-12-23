// cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return

function solution(cards1, cards2, goal) {
    let cnt = 0;
    for (let i = 0; i < goal.length; i++) {
        if (cards1[0] === goal[i]) {
            cards1.shift()
            cnt++
        } else if (cards2[0] === goal[i]) {
            cards2.shift()
            cnt++
        }
    }
    return goal.length === cnt ? 'Yes' : 'No';
}