function solution(arr) {
    let ans = arr.filter(e => e !== Math.min(...arr))
    return ans.length === 0 ? [-1] : ans
}