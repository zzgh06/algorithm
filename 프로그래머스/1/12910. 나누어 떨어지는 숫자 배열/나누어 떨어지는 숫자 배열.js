function solution(arr, divisor) {
    var answer = arr.filter(e => e%divisor === 0).sort((a,b) => a - b);
    return answer.length > 0 ? answer : [-1]
}