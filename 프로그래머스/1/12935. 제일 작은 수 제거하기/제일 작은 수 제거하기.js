function solution(arr) {
    let minNum = Math.min(...arr)
    let answer = arr
    answer.splice(arr.indexOf(minNum), 1)
    return answer.length >= 1 ? answer : [-1]
}