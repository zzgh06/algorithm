function solution(names) {
    var answer = [];
    
    for(let i = 0; i < names.length; i += 5) {
        let temp;
        answer.push(names[i])
    }
    return answer
}