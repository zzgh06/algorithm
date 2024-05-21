// 에라토스테네스의 체 알고리즘의 의하면 소수로 나누어 떨어지는 수의 배수는 소수이므로 해당 배수를 제거해나가며
// 구하고자 하는 범위 내의 배수를 제거
// 1. n까지 모든 수는 소수라고 가정
// 2. 0과 1은 소수가 아니라서 제외
// 3. 2부터 ~ 제곱근까지 비교 (제곱근 이후의 배수들은 이미 삭제)
function solution(n) {
    let primes = Array(n + 1).fill(true).fill(false, 0, 2);
    // [false,false,true,true,true,true]
    for (let i = 2; i * i <= n; i++) {
        // console.log(i) 3
        if (primes[i]) {
            // console.log(primes[i]) // true
            for (let j = i * i; j <= n; j += i) {
                // console.log(j) 4
                primes[j] = false;
            }
        }
    }
    return primes.filter((e) => e).length;
}