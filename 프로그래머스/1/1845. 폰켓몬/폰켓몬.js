function solution(nums) {
    let limit = Math.floor(nums.length) / 2 // 2
    let pocketMon = [...new Set(nums)] // [3,1,2]
    return pocketMon.length >= limit ? limit : pocketMon.length 
}