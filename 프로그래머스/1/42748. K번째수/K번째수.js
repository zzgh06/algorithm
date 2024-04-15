function solution(array, commands) {
    const result = []
    commands.map((nums)=>{
        // console.log(nums) // [ 2, 5, 3 ] [ 4, 4, 1 ] [ 1, 7, 3 ]
        const arr = array.slice(nums[0] - 1, nums[1]).sort((a, b) => a - b)
        const idx = nums[2] - 1
        // console.log(idx) // 3 1 3
        // console.log(arr) // [ 2, 3, 5, 6 ] [ 6 ] [1, 2, 3, 4, 5, 6, 7]
        result.push(arr[idx])
    })
    return result
}