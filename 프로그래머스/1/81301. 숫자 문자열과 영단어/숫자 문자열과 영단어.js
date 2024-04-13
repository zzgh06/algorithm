function solution(s) {
    const alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    alpha.forEach((word, idx)=>{
        // 문자열의 구분자로 배열의 값을 활용하고 idx를 활용하여 배열의 값을 연결
        s = s.split(word).join(idx)
    })
    return Number(s)
}