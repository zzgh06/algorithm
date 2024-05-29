// answer = n - lost.length;
// lost 앞뒤에 reverse 가 있는지
// 있고 해당이 되면 ++, 없으면 --
// 주의 : 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다
function solution(n, lost, reserve) {
    // 여벌없이 분실한 학생
    let lost_student = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    // 분실없이 여벌이 있는 학생
    let reserve_student = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    for (let i = 0; i < reserve_student.length; i++) {
        // 앞번호
        if (lost_student.includes(reserve_student[i] - 1)) {
            lost_student = lost_student.filter(v => v !== reserve_student[i] - 1); // 0
            console.log(lost_student)
        } 
        // 뒤번호
        else if (lost_student.includes(reserve_student[i] + 1)) {
            lost_student = lost_student.filter(v => v !== reserve_student[i] + 1); // 2
            console.log(lost_student)
        }
    }
    return n - lost_student.length;
}