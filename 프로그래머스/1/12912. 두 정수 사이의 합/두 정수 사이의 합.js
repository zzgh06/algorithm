// 단순히 a 와 b 사이의 정수의 합을 구하는 문제가 아니라
// a와 b의 대소관계가 정해져 있지 않으므로 이를 주의할 것
function solution(a, b) {
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i
    }
    return answer;
}