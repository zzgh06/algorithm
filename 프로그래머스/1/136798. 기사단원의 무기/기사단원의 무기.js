// 기사단원의 수를 나타내는 정수 number
// 공격력의 제한수치를 나타내는 정수 limit
// 제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power

function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++){
        let cnt = 0;
        for (let j= 1; j<= Math.sqrt(i); j++){
            if (i % j === 0) {
                if (i/j === j) cnt += 1;
                else cnt += 2
            }
            if (cnt > limit) {
                cnt = power
                break
            }
        }
        answer += cnt
    }
    return answer
}