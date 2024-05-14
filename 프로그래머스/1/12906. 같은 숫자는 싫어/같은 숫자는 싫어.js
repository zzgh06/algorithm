// stack 자료 구조
// arr 배열의 요소를 하나 빼서 새로운 배열에 넣고, 이전의 넣은 값과 비교해서
// 같은 숫자인 경우 제거 아니면 그냥 넘김
function solution(arr) {
    let newArr = [[...arr][0]];
    // console.log(newArr)
    for (let i = 0; i < arr.length - 1; i++){
        // console.log(arr[i], arr[i + 1])
        if (newArr[newArr.length - 1] !== arr[i+1]) {
            newArr.push(arr[i+1])
        }
    }
    return newArr
}