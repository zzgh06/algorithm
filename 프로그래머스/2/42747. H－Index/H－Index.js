// H-지수 구하는 방법
// 1. 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 
// 2. 인용수가 논문수와 같아지거나
// 3. 피인용수가 논문수보다 작아지기 시작하는 숫자

function solution(citations) {
    let ans = 0
    citations.sort((a, b) => b - a)
    // console.log(citations) [ 6, 5, 3, 1, 0 ]
    for (let i = 0; i < citations.length; i++){
        console.log(citations[i], i + 1)
        if (citations[i] >= i + 1) {
            ans++;
        }
    }
    return ans
}