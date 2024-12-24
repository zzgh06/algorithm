// 스택활용(후입 선출) 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고
// 빵 – 야채 – 고기 - 빵 = [1, 2, 3, 1]
// [2, 1, 1, 2, 3, 1, 2, 3, 1]
function solution(ingredient) {
    let answer = 0;
    let stack = [];
    for (let i of ingredient) {
        stack.push(i)
        if (stack.slice(-4).join('') === '1231') {
            stack.splice(-4)
            answer++
        }
    }
    return answer;
}