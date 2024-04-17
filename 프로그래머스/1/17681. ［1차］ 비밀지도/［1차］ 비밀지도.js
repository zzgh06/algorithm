function solution(n, arr1, arr2) {
    const answer = [];
    // 비트연산자를 통해 각 배열을 이진수로 변환
    for (let i = 0; i < n; i++){
        const binaryNumber = (arr1[i] | arr2[i]).toString(2);
        // console.log(binaryNumber)   
        answer.push(binaryNumber)
    }
    
    // 배열의 담긴 이진수의 길이가 n보다 작을 경우, 앞에 0를 추가
    for (let i = 0; i < n; i++){
        while (answer[i].length < n){
            answer[i] = '0' + answer[i]
        }
    }
    
    // 정규표현식을 통해 1의 경우 #으로 0은 공백으로 치환
    for (let i = 0; i < n; i++){
        answer[i] = answer[i].replace(/1/g, '#')
        answer[i] = answer[i].replace(/0/g, ' ')
    }
    return answer
}