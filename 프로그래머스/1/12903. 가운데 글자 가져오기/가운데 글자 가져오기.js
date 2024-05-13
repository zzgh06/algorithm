function solution(s) {
    var answer = '';
    let index = 0
    if (s.length % 2 === 0) {
        return s.substr(Math.floor(s.length / 2) - 1, 2)
    } else {
        return s[Math.floor(s.length / 2)]
    }
}