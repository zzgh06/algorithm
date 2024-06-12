//최대공약수 구하기
let getGCD = (num1, num2) => {
    while(num2 > 0){
        let temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    } 
    return num1;
}

//최소공배수 구하기
let getLcm = (a, b) => {
  return (a * b) / getGCD(a, b);
};

function solution(arr) {
    let answer = 1
    for (let i = 0; i < arr.length; i++){
        answer = getLcm(answer, arr[i])
    }
    return answer
}