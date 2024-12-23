// 사과는 상태에 따라 1점부터 k점까지
// 한 상자에 사과를 m개씩 담아 포장 / 상자에 담긴 사과 중 가장 낮은 점수가 p점
// 사과 한 상자의 가격은 p * m 입니다.
// 최대 이익을 계산
function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a); // [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]
    for (let i = m; i <= score.length; i += m) {
        answer += score[i - 1] * m
    }
    return answer;
}