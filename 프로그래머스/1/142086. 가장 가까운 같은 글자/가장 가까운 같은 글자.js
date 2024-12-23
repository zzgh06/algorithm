function solution(s) {
    let ans = []
    let temp = []
    for (let i = 0; i < s.length; i++){
        if (!temp.includes(s[i])) {
            ans.push(-1)
            temp.push(s[i])
        } else {
            ans.push(i - temp.lastIndexOf(s[i]))
            temp.push(s[i])
        }
    }
    return ans
}