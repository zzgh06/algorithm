// s가 의미하는 원래 숫자를 return
function solution(s) {
    // 영단어가 담기 배열을 만들고
    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // 이를 순회하면서 숫자 문자열을 word로 구분하여 idx로 연결합니다
    words.forEach((word, idx) => {
        s = s.split(word).join(idx)
    })
    return Number(s)
}