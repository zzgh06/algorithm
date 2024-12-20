function solution(array) {
    let maxNum = Math.max(...array)
    let maxInx = array.indexOf(maxNum);
    return [maxNum, maxInx]
}