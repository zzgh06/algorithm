// 총 N 마리의 폰켓몬 중에서 N/2마리
function solution(nums) {
    let limit = nums.length / 2
    
    return [...new Set(nums)].length > limit ? limit : [...new Set(nums)].length;
}