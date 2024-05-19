// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌으므로
// 각 학생이 문제를 찍은 패턴과 answers가 일치할수록 높은 점수를 얻을 수 있음
function solution(answers) {
    let result = [];
    let score1 = 0, score2 = 0, score3 = 0; 
    
    let student1 = [1, 2, 3, 4, 5]
    let student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    answers.forEach((ans, idx)=>{
        if (ans === student1[idx % student1.length]){score1++}
        if (ans === student2[idx % student2.length]){score2++}
        if (ans === student3[idx % student3.length]){score3++}
        // console.log(score1, score2, score3)
    })
    const maxScore = Math.max(score1, score2, score3)
    if (maxScore === score1){result.push(1)}
    if (maxScore === score2){result.push(2)}
    if (maxScore === score3){result.push(3)}
    return result
}