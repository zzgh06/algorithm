function solution(progresses, speeds) {
    let answer = [];
    
    let days = progresses.map((ele, idx) => {
        return Math.ceil((100 - ele) / speeds[idx])
    })
    let first = days[0]
    let count = 1;

    for (let i = 1; i < days.length; i++){
        if (days[i] <= first) {
            count++;
        } else {
            first = days[i];
            answer.push(count);
            count = 1;
        }      
    }
    answer.push(count)
    return answer;
}