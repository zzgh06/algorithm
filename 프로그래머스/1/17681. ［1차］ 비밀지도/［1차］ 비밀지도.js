function solution(n, arr1, arr2) {
    const answer = [];
    // 각 배열을 비트 연산자를 통해 이진수로 변환
    for (let i = 0; i < n; i++){
        let binaryNumber = (arr1[i] | arr2[i]).toString(2);
        answer.push(binaryNumber)
    }
    
    // 9의 경우 이진수는 1001인데 n(=5)의 자릿수보다 부족하다. 
    // 배열에 담긴 이진수의 길이가 n보다 작을 경우 앞에 0를 붙이자     
    for (let i = 0; i < n; i++){
        while (answer[i].length < n) {
            answer[i] = '0' + answer[i] 
        }
    }
    
    // 정규표현식을 이용해서 1 은 #으로 0은 공백으로 처리
    for (let i = 0; i < n; i++){
        answer[i] = answer[i].replace(/1/g, '#').replace(/0/g, ' ')
    }
    return answer
}