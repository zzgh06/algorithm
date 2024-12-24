function solution(nums) {
    let limit = nums.length / 2
    let pocketMon = [...new Set(nums)]
    return pocketMon.length > limit ? limit : pocketMon.length;
}