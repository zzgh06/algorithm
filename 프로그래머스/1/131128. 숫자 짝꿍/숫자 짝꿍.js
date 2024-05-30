// x, y 를 배열로 만든다
// 배열에서 0~9까지 해당하는 숫자를 얼마나 포함하고 있는지 개수를 구하고
// 포함된 숫자(i) 중에 적게 가지고 있는 수만큼 문자열에 더한다
// 없으면 -1를 return
// 새로운 배열에 0만 있으면 0을 리턴
function solution(X, Y) {
    let answer = '';
    X = X.split(''); // 1 0 0
    Y = Y.split(''); // 1 2 3 4 5 0
    for(let i = 0 ; i < 10 ; i ++) {
        // X와 Y 0 ~ 9까지 일치하는 개수를 구하고  
        const curX = X.filter(a => Number(a) === i).length
        const curY = Y.filter(a => Number(a) === i).length
        // console.log(curX, curY)
        // 
        answer += String(i).repeat(Math.min(curX, curY))
    }
    if (answer === '') return "-1"
    if (Number(answer) === 0) return "0"
    return answer.split("").sort((a,b)=>Number(b) - Number(a)).join("")
}