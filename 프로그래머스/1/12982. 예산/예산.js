function solution(d, budget) {
    var answer = 0;
    const dSort= d.sort((a, b) => (a-b))
    for (let i = 0; i < dSort.length; i++) {
        budget -= dSort[i]
        if (budget < 0){
            break
        }
        answer++;
    }
    return answer
}