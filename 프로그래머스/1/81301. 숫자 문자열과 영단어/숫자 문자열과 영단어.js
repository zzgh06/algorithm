function solution(s) {
    let numWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numWord.forEach((word, idx)=>{
        // word로 구분하고 idx 기준으로 합친다
        s = s.split(word).join(idx)
    })
    return Number(s)
}