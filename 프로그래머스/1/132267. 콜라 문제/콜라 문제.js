function solution(a, b, n) {
    let answer = 0
    while (n >= a) {
        // 바꿀 수 있는 빈 병 수 * 교환받는 콜라수 b
        answer += Math.floor(n / a) * b; 
        // 바꿀 수 있는 빈 병 수(교환하고 먹으면 빈 병) + 교환하고 남은 빈 병
        // 딱 나누어지지 않을 수 있기 때문에 바꿀 수 있는 빈 병 수 + 교환하고 남은 빈 병 해준다
        n = (Math.floor(n / a) * b) + n % a; 
    }
    return answer
}