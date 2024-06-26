// 1) 점수는 0점에서 10점까지(10인 경우는 예외처리)
// 2) S ** 1, D ** 2, T ** 3
// 3) 스타상(*) 당첨 시 * 2 / 아차상(#) 당첨 시 해당 점수는 마이너스
// 4) 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다.
function solution(dartResult) {
    let score = [];
    let answer = 0;
    let temp = 0;
    for (let i = 0; i < dartResult.length; i++){
        if (!isNaN(dartResult[i])){
            temp = Number(dartResult[i-1]) === 1 ? 10 : Number(dartResult[i])
        }
        else if (dartResult[i] === 'S'){
            score.push(temp)
        }
        else if (dartResult[i] === 'D'){
            score.push(Math.pow(temp, 2))
        }
        else if (dartResult[i] === 'T'){
            score.push(Math.pow(temp, 3))
        }
        else if (dartResult[i] === '*'){
            score[score.length - 2] *= 2
            score[score.length - 1] *= 2
        }
        else if (dartResult[i] === '#'){
            score[score.length - 1] *= -1
        }
    }
    answer = score.reduce((prev, cur) => prev + cur, 0)
    return answer
}