// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
function solution(n) {
    let result = n+1;
    let binary = n.toString(2).split("").filter((v) => v === "1").length;
    while(n < result){
        let binaryResult = result.toString(2).split("").filter((v) => v === "1").length;
        if (binary === binaryResult) break
        result++;
    }
    return result;
}