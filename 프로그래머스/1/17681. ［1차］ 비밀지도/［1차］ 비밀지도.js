function solution(n, arr1, arr2) {
    const answer = [];
    // 각 배열을 비트 연산자를 통해 이진수로 변환
    for (let i = 0; i < n; i ++){
        let binaryNumber = (arr1[i] | arr2[i]).toString(2);
        answer.push(binaryNumber)
    }
    console.log(answer)
    // map()으로 순환하여 정규식을 사용하여 1은 #으로 0은 ' '공백으로 변환 후 반환
    // 2진법 변환 중 앞에 0이 사라지는 경우가 존재하기 때문에
    // padStart()를 이용하여 n보다 작을 경우, 앞에 0를 붙여준다
    return answer.map((ele) => ele.padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '))
}