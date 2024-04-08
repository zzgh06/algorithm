function solution(arr) {
    const min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1);
    const answer = arr.length ? arr : [-1]
    return answer;
}