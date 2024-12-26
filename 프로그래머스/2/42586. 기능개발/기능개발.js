function solution(progresses, speeds) {
    let answer = [];
    
    // 각 개발 속도에 따라 몇일이 걸리는지 확인
    let days = progresses.map((ele, idx) => {
        return Math.ceil((100 - ele) / speeds[idx])
    })
    // console.log(days) // [7, 3, 9]
    
    // 제일 먼저 완료해야할 일정
    let first = days[0]
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        // 배포되어야할 순서대로 나열되어 있기 때문에
        // 먼저 완료되더라도 first 기준으로 배포된다.
        if (days[i] <= first) {
            count++
        } else {
            // first 기준으로 배포가 완료되면 first 기준을 days[i] 로 변경하고 완료된 작업을 배열에 추가한다
            first = days[i]
            answer.push(count);
            count = 1;
        }
    }
    answer.push(count)
    return answer
}