// 유효한 괄호 문자열 검사
function isVaild(s) {
    let stack = [];
    for (const char of s) {
       if (char === "(" || char === "[" || char === "{") {
           stack.push(char)
       } else {
           if (stack.length === 0) return false;
           let opening = stack[stack.length - 1];
           if (
               opening === "(" && char === ")" ||
               opening === "[" && char === "]" ||
               opening === "{" && char === "}"
              ) {
               stack.pop();
           }
       }
    }
    return stack.length === 0;
}

// 회전된 문자열 검사
function solution(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++){
        // s.slice(i) : i번째 부터
        //  s.slice(0, i) : 0부터 i까지
        const rotate = s.slice(i) + s.slice(0, i)
        if (isVaild(rotate)){
            result++;
        }
    }
    return result;
}
