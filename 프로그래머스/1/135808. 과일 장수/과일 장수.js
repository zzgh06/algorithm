// 1점부터 k점까지의 점수로 분류(k점이 최상품의 사과이고 1점이 최하품의 사과)
// 한 상자에 사과를 m개씩 담아 포장
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다

// ▼아이디어를 적고 풀어보기▼
// score를 내림차순으로 정렬(최대이익)
// m개씩 나누어 그중 가장 낮은 p(m개 중 마지막 요소) * m 하여 answer에 더해간다
function solution(k, m, score) {
    let answer = 0;
    score = score.sort((a, b) => b-a) 
    // console.log(score)  [3, 3, 2, 2, 1, 1, 1]
    for (let i = m; i <= score.length; i = i + m) {
        answer += score[i - 1] * m
    }
    return answer
}