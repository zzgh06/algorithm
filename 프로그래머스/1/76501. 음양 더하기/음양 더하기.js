function solution(absolutes, signs) {
    let num = absolutes.map((x, idx) => signs[idx] === true ? x : -(x))
    return num.reduce((a, b) => a + b, 0)
}