// 에라토스테네스의 체 알고리즘의 의하면 소수로 나누어 떨어지는 수의 배수는 소수이므로 해당 배수를 제거해나가며
// 구하고자 하는 범위 내의 배수를 제거
// 1. n까지 모든 수는 소수라고 가정
// 2. 0과 1은 소수가 아니라서 제외
// 3. 2부터 ~ 제곱근까지 비교 (제곱근 이후의 배수들은 이미 삭제)

function solution(num) {
    const numArr = [false, false, ...Array(num - 1).fill(true)];
    for (let i = 2; i * i <= num; i += 1) {
        if (numArr[i]) {
            for (let j = i * 2; j <= num; j += i) {
                numArr[j] = false; 
            }
        }
    }
    return numArr.filter(Boolean).length;
}