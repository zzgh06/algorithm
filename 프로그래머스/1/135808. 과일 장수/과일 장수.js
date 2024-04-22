// 1점부터 k점까지의 점수로 분류(k점이 최상품의 사과이고 1점이 최하품의 사과)
// 한 상자에 사과를 m개씩 담아 포장
// 상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.
// 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다

// score 높은 순으로 정렬하여 m의 길이마다 그 중 가장 낮은 값과 * m 하여 값을 구한다

function solution(k, m, score) {
    let answer = 0;
    let temp = score.sort((a,b) => (b - a))
    // console.log(temp) [3, 3, 2, 2, 1, 1, 1] [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]
    for (let i = m; i <= temp.length; i = i + m){
        answer += temp[i - 1] * m
    }
    return answer
}