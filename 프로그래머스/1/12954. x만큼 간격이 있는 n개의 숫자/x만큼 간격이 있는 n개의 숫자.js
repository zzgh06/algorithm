function solution(x, n) {
    let ans = []
    let sum = 0
    // n회 반복하면서 x씩 증가
    for(let i = 0; i < n; i++){
        sum += x
        ans.push(sum)
    }
    return ans
}