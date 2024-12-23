// 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
function solution(N, stages) {
    let answer = [];
    for (let i = 1; i <= N; i++) {
        let clear = stages.filter(x => x >= i).length;
        let fail = stages.filter(x => x === i).length;
        answer.push([i, fail / clear])
    }
    answer.sort((a,b) => b[1] - a[1])
    return answer.map(ele => ele[0]);
}