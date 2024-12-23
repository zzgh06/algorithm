function solution(array, commands) {
    let ans = [];
    commands.map((command) => {
        let ele = array.slice(command[0] -1, command[1]).sort((a,b) => a - b)
        ans.push(ele[command[2] - 1])
    })
    return ans
}