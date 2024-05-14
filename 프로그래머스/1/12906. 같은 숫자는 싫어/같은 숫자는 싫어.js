
function solution(arr) {
    let beforeNum;
    let newArr = [];
    
    arr.forEach((num, index)=>{
        if (beforeNum !== num){
            newArr.push(num)
        }
        beforeNum = num
    })
    return newArr
}