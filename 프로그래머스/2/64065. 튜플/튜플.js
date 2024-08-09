// 튜플 괄호 벗기고 배열로 변환
// 집합은 중복되는 원소가 없고 순서와 상관없이 나열되어 있음
// 결국 오름차순으로 나열하고 중복되는 값은 제거하면 튜플의 원소를 구할 수 있음

function solution(s) {
    let answer = [];
    let tuples = s.slice(2, -2).split(/},{/g).sort((a, b) => a.length - b.length);

    tuples.forEach(v => {
        let tuple = v.split(',')
        answer.push(tuple.find(e => !answer.includes(e)));
    })
    return answer.map(e => Number(e));;
}