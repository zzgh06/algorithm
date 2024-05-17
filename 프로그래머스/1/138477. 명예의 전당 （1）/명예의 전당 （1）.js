// 점수를 내림차순으로 정렬
// k번째 이상부터 끝의 값을 제거(내림차순이기 때문에 배열의 끝의 값이 가장 작은 값)
// answer에 각 첫번쩨 값을 배열에 담아서 리턴
// score.sort((a, b)=> b - a)
function solution(k, score) {
    let answer = [];
    return score.map((score)=>{
        answer.push(score)
        answer.sort((a,b)=>b-a)
        if (answer.length > k){
            answer.pop()
        }
        return answer[answer.length - 1]
    })
}