function solution(s) {
    let strArr = s.split("")
    strArr.sort(function (a, b) {if (a > b) return -1; else if (b > a) return 1; else return 0;})
    return strArr.join("")
}