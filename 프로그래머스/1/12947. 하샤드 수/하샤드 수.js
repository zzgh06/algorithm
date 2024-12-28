function solution(x) {
    let num = x.toString().split("").map(x => Number(x)).reduce((a, b) => a + b, 0)
    return x % num === 0 ? true : false
}