function solution(n) {
    return String(n).split("").map(s => Number(s)).reduce((a, b) => a += b, 0);
}