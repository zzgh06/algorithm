function solution(cards1, cards2, goal) {
    let cnt = 0;
    
    goal.forEach((_, idx) => {
        if (cards1[0] === goal[idx]) {
            cards1.shift()
            cnt++
        } else if (cards2[0] === goal[idx]) {
            cards2.shift()
            cnt++
        }
    })
    return goal.length === cnt ? "Yes" : "No"
}