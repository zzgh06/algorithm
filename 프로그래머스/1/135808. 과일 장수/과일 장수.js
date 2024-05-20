function solution(k, m, score) {
    let result = 0
    score = score.sort((a,b)=>b-a);
    // k = 3, m = 4
    // console.log(score) [ 3, 3, 2, 2, 1, 1, 1 ]
    //     
    // score.length = 6
    for(let i = m; i <= score.length; i += m){
        result += score[i-1] * m
    }
    return result
}