function solution(s)
{
    let stack = [];
    // 길이가 홀수이면 불가능
    if (s.length % 2 !== 0) return 0;
    for (let i = 0; i < s.length; i++){
        if (stack[stack.length -1] === s[i]){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0 ? 1 : 0
}