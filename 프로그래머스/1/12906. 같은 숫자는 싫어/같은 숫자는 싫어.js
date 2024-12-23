function solution(arr)
{
    let answer = [];
    let beforeNum;

    arr.forEach((ele, i) => {
        if (beforeNum !== ele) {
            answer.push(ele)
        }
        beforeNum = ele
    })
    return answer;
}