// 이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
// 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용 X

function solution(new_id) {
    // 1단계 소문자로 치환
    let answer = new_id.toLowerCase();
    
    // 2단계 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    answer = answer.replace(/[^a-z0-9-_.]/g, '');
    
    // 3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    answer = answer.replace(/\.{2,}/g, '.');
    
    // 4단계 마침표(.)가 처음이나 끝에 위치한다면 제거
    answer = answer.replace(/^\.+|\.+$/g, '');
    
    // 5단계 빈 문자열이라면, "a"를 대입
    if(answer.length === 0) {
        answer = "a";
    }
    
    // 6단계 길이가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 제거
    // 만약 제거 후 마침표(.)가 끝에 위치한다면 마침표(.) 문자를 제거
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/, '');
    }
    
    // 7단계 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙임
    while(answer.length <= 2) {
        answer += answer[answer.length - 1];
    }
    
    return answer;
}