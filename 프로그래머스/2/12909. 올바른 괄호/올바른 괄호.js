function solution(s){
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[0] === ")") {
            return false
        }
        if (s[i] === "(") {
            stack.push(s[i])
        } else if (s[i] === ")") {
            stack.pop(s[i])
        }
    }
    return stack.length > 0 ? false : true
}