function solution(n, k) {
    var answer = 0;
    let free = Math.floor(n/10);
    return free >= 1 ? n * 12000 + (k-free) * 2000 : n * 12000 + k * 2000
}