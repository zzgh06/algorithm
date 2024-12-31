// array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수

function solution(array, commands) {
    let res = []
    commands.forEach((command) => {
        // [1, 5, 2, 6, 3, 7, 4]
        // 0 1 2 3 4 5
        // 1 2 3 4 5 6
        
        let arr = array.slice(command[0] - 1, command[1])
        // console.log(arr)
        arr.sort((a, b) => a - b)
        res.push(arr[command[2] - 1])
    })
    return res
}