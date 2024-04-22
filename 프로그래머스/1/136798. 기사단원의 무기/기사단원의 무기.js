// 아이디어
// 1 ~ number의 약수의 개수를 차례대로 구한다.
// 각 약수의 갯수가 limit를 넘어갈 경우 해당요소는 power 점수 갖고 아니면 해당 요소(공격력)를 가진다

// 약수를 구하는 방법
// 1. 나머지가 0이 되는 수를 찾는다.
// 2. 약수는 `대상을 제외`하고 대상의 2/1 보다 클 수 없기 때문에 
// 반만 테스트 진행 하면 된다.(시간 단축)

function solution(number, limit, power) {
    let result = 0;
    let cnt = 0;
    for (let i = 1; i <= number; i++){
        // 카운터를 0으로 만들어준다.
        cnt = 0;
    
        for (let j = 1; j <= i/2; j++) {
            if (i % j === 0){
                cnt += 1;
            }
        }
        // 반을 나눈다는것은 본인은 제외 한것임으로 카운터에 1을 더해준다.
        cnt += 1;
        
        // 각 약수의 갯수가 limit를 넘어갈 경우 해당요소는 power 점수 갖고 아니면 해당 요소(공격력)를 가진다
        if (limit < cnt){
            result += power
        } else {
            result += cnt
        }
    }
    return result
}