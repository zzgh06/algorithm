// ["try", "hello", "world"]
// 1. 먼저 "try" => "t", "r", "y 로 바꾸고
// 2. 단어 하나씩 map() 함수로 value와 index 값을 콜백함수의 매개변수로 사용하여 changeUpperLowerCase 함수에 인자로 보내준뒤
// 3. 짝수 번째는 대문자, 홀수 번째는 소문자로 반환
// 4. join() 함수를 통해 다시 단어를 이어붙인 뒤, 나머지 단어도 이러한 작업을 반복
// 5. 마지막으로 한번 더 join() 함수를 공백을 기준으로 이어붙인 뒤 최종 단어를 완성해준다.
function solution(s) {
    const change = (idx, str) => {
        return idx % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    }
    const answer = s.split(" ")
    .map((sentence) => sentence.split("").map((str, idx) => change(idx, str)).join("")).join(" ")
    return answer
}