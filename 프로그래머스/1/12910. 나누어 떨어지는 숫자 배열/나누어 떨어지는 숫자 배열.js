function solution(arr, divisor) {
    let res = []
    res = arr.filter(num => num%divisor == 0).sort((a, b) => a - b)
    if (res.length == 0){res.push(-1)}
    return res
}
