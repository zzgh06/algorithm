function solution(k, score) {
    let answer = [];
    let temp = [];
    for (let daliy of score) {
        temp.push(daliy)
        temp.sort((a, b) => b - a)
        
        if (temp.length > k) {
            temp.length = k
            // console.log(temp)
        }
        answer.push(temp[temp.length - 1]) 
    }
    return answer
}