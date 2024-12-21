function solution(n) {
    return Number(n.toString().split("").map(Number).sort((a,b) => (a - b) * -1).join(""));
}