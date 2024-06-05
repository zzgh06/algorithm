function solution(s) {
    let answer = '';
    let strSplit = s.split(' ');
    let strMap = strSplit.map((str)=>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    return strMap.join(' ')
}