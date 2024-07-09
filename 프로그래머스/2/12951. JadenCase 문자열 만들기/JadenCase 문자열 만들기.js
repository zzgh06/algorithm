function solution(s) {
    let answer = s.split(' ').map((str)=>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    
    return answer.join(' ');
}