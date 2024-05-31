// 빵-야체-고기-빵
// 1-2-3-1
function solution(ingredient) {
    let answer = 0;
    let stack = [];
    for (let i of ingredient){
        // console.log(i)
        stack.push(i)
        // 햄버거 재료가 4개 이상일 때, 4개씩 잘라서 1231경우만 stack에서 제거
        if (stack.length >= 4){
            if (stack.slice(-4).join("") === '1231'){
                stack.splice(-4)
                answer++
            }
        }
    }
    return answer
}