function solution(arr, divisor) {
    let ans = []
    ans = arr.filter((num)=>num%divisor === 0).sort((a, b)=>a - b)
    if (ans.length === 0) ans.push(-1)
    return ans
}