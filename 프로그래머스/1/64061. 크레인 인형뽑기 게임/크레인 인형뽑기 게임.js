// 2차원 배열 board
// 크레인을 작동시킨 위치가 담긴 배열 moves

// 뽑은 인형을 담는 바구니 역할을 하는 배열 basket을 만듭니다.
// basket에 연속해서 쌓여 사라진 인형의 수를 기록하는 result 변수를 만듭니다.
// moves 배열의 0번 째 원소의 값을 가지고 board 배열을 반복문으로 순회하면서 0이 아닌 값을 찾으면 basket에 담습니다.
// basket의 원소가 연속으로 같은 경우 두 원소를 제거하며 result에 2를 더합니다.
// moves 배열을 모두 순회하였다면 사라진 인형의 개수 result를 리턴합니다.
function solution(board, moves) {
    let result = 0;
    let basket = [];
    moves.map(location => {
        let index = location - 1;
        for (let v of board){
            if (v[index] !== 0){
                if(v[index] === basket[basket.length - 1]){
                    basket.pop()
                    result += 2
                } else {
                  basket.push(v[index])  
                }
                v[index] = 0
                break
            }
        }
    })
    return result
}