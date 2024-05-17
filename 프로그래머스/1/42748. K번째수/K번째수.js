function solution(array, commands) {
    let res = []
    commands.map((command)=>{
        // console.log(command)
        let arr = array.slice(command[0]-1, command[1]).sort((a, b) => a-b)
        res.push(arr[command[2] - 1])
    })
    return res
}