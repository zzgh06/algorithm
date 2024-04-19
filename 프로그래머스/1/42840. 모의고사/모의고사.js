// 각 학생의 문제를 찍는 패턴을 저장
// 각 패턴이 answers 배열의 정답과 일치할 경우 점수 추가
function solution(answers) {
    let result = [];
    let score1 = 0, score2 = 0, score3  = 0;
    
    let student1 = [1, 2, 3, 4, 5]
    let student2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    answers.forEach((ans, idx) =>{
        if (ans === student1[idx % student1.length]){
            score1++;
        }
        if (ans === student2[idx % student2.length]){
            score2++;
        }
        if (ans === student3[idx % student3.length]){
            score3++;
        }
    })
    const maxScore = Math.max(score1, score2, score3)
    
    if (score1 === maxScore) {
        result.push(1)
    }
    if (score2 === maxScore) {
        result.push(2)
    }
    if (score3 === maxScore) {
        result.push(3)
    }
    return result
}