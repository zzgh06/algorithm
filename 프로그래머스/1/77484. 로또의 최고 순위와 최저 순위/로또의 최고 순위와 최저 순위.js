// 먼저 알아볼 수 있는 lottos 가 win_nums와 얼마나 일치하는 지 확인
// let sameNums 먼저 일치하는 숫자의 갯수를 변수에 저장하고 
// lottos에 0의 갯수를 확인해서 0 갯수와 sameNums 더하고 빼서 최고 최저 순위 결정
function solution(lottos, win_nums) {
    let answer = []
    let zeroCnt = lottos.filter((e) => 0 === e).length;
    let sameNums = win_nums.filter((e) => lottos.includes(e)).length;
    // console.log(zeroCnt, sameNums)
    let maxRank = sameNums + zeroCnt; // 4, 6, 6
    
    // 최고 순위 당첨
    if (maxRank > 0){
        answer.push(7 - maxRank)
    } else {
        // 일치하는 번호가 없는 경우
        answer.push(6)
    }
    
    // 최저 순위 당첨
    if (sameNums > 0){
        answer.push(7 - sameNums)
    } else {
        answer.push(6)
    }
    return answer
}