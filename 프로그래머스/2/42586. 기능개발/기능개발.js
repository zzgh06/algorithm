// 1. 작업 완료 일수 계산: 작업 i의 남은 일수는 (100 - progresses[i]) / speeds[i]로 계산.
// 2. 배포 묶음 계산:
// 현재 작업이 이전 작업보다 더 늦게 완료된다면 새로운 배포 묶음을 시작.
// 그렇지 않다면 현재 작업을 이전 작업과 함께 배포.
// 3. 배포 묶음 저장: 각 배포 묶음의 크기를 리스트에 저장.

function solution(progresses, speeds) {
    let result = [];
    let days = progresses.map((progresses, idx) =>
        Math.ceil((100 - progresses) / speeds[idx])
    );
    
    // 첫번째로 끝마쳐야하는 기능
    let current_max = days[0]
    let count = 1;

    // days [ 5, 10, 1, 1, 20, 1 ]
    for (let i = 1; i < days.length; i++){
        // 첫번째를 기준으로 다음 작업이 같이 마무리 됐을 경우
        if (days[i] <= current_max) {
            count++;
        } else {
            // 다음 작업이 아직 안끝난 경우 이를 기준으로 
            current_max = days[i];
            result.push(count);
            count = 1;
        }
    }
    result.push(count);
    return result
}