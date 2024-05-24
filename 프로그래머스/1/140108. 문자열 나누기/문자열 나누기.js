// 첫글자 : x
// x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
// 처음으로 두 횟수가 같아지는 순간 멈추고
// 지금까지 읽은 문자열을 분리합니다.
function solution(s) {
    let x = "";
    let answer = 0;
    let cnt = 0;
    for (const str of s){
        if (!cnt){
            answer++;
            x = str
        }
        str === x ? cnt++ : cnt--
    }
    return answer;
}