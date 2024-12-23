function solution(s) {

    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    words.forEach((word, idx) => {
        s = s.split(word).join(idx)
    })
    return Number(s)
}