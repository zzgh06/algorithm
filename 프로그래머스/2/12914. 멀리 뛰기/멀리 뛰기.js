// 1칸, 또는 2칸을 뛸 수 있다
// 피보나치 수열과 dp를 이용한 문제
// n번째 칸에 도달하는 방법은 (n-1)번째 칸에서 1칸 뛰는 경우와 (n-2)번째 칸에서 2칸 뛰는 경우
function solution(n) {
    if (n === 1 || n === 2) return n;
    let mod = 1234567;
    let dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }
    console.log(dp)
    return dp[dp.length -1]
}