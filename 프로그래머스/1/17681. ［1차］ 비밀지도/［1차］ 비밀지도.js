function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++) {
        // 비트 연산자 OR a|b 대응되는 비트 중 하나라도 1이면 1를 반환히고 이진수로 변환
        let binaryNumber = (arr1[i] | arr2[i]).toString(2)
        answer.push(binaryNumber)
    }
    
    // answer의 배열 값의 길이가 n보다 작을경우 0를 붙여준다
    for(let i = 0; i < n; i++) {
    while(answer[i].length < n) {
            answer[i] = '0' + answer[i]
        }
    }
    
    // 배열의 값 중 1은 #으로 0은 " " 공백으로 치환
    for(let i = 0; i < n; i++) {
        answer[i] = answer[i].replace(/1/g, '#')
        answer[i] = answer[i].replace(/0/g, ' ')
    }
    return answer
}