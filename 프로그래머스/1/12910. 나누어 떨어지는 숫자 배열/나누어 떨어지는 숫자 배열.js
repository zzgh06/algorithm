function solution(arr, divisor) {
    let ele = arr.filter(x => x % divisor === 0);
    ele.sort((a, b) => a - b)
    return ele.length > 0 ? ele : [-1]
}