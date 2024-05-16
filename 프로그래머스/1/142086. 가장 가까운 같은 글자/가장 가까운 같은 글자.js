function solution(s) {
    let temp = [];
    let answer =[]
    for (let i = 0; i < s.length; i++){
        // temp array 안에 s[i]가 없다면 temp.push(s[i])
        // answer.push(-1)
        if (!temp.includes(s[i])){
            answer.push(-1)
            temp.push(s[i])
        } else {
            answer.push(i - temp.lastIndexOf(s[i]))
            temp.push(s[i])
        }
    }
    return answer;
}