// 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
// index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
// skip에 있는 알파벳은 제외하고 건너뜁니다.

// String.fromCharCode() : 유니코드 값을 문자열로 변환시켜주는 메서드
function solution(s, skip, index) {
    // skip에 포함되지 않은 알파벳 배열
    const alpha = [...new Array(26)].map((v, i) => String.fromCharCode(i+97))
        .filter((el) => !skip.includes(el));
    return [...s].map((str) => alpha[(alpha.indexOf(str) + index) % alpha.length]).join("")
}