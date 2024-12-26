// H-지수 구하는 방법
// 1. 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후, 
// 2. 인용수가 논문수와 같아지거나
// 3. 피인용수가 논문수보다 작아지기 시작하는 숫자
function solution(citations) {
    let res = 0
    citations.sort((a, b) => b - a)
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > i) {
            res++;
        }
    }
    return res
}