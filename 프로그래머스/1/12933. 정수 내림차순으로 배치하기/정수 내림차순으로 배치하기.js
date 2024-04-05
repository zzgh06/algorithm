function solution(n) {
    var answer = [];
    let nums = String(n).split("")
    nums = nums.sort(function(a, b){return b - a}).join("");
    
    return Number(nums);
}