// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// s가 "1"이 될 때까지 
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수

function solution(s) {
    let [index, cnt] = [0, 0]
    while(s !== "1") {
        index += 1;
        cnt += [...s].filter((v) => v === "0").length;
        s = [...s].filter((v)=> v !== "0").length.toString(2);
    }
    return [index, cnt]
}