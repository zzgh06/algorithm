function solution(a, b, n) {
    let answer = 0;
    while (n >= a){
        // 1. 교환 가능한 콜라 수 구하기
        answer += Math.floor(n/a) * b
        // 2. 얻은 빈 병 갯수 구하기
        n = (Math.floor(n/a) * b) + n % a;
    }
    return answer;
}
