function solution(numbers) {
    const answer = [];
    // 배열에서 서로 다른 인덱스 값을 더한다.
    for (let i = 0; i < numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
        }
    }
    // console.log(answer) // [3,5,6,3,4,5,2,7,4,5]
    // answer.sort((a,b) => a - b) // [2,3,3,4,4,5,5,5,6,7]
    return [...new Set(answer)].sort((a,b) => a - b)
}