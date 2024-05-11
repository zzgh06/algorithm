// absolutes 절대값을 담은 배열 / signs 부호를 담은 boolean 배열
function solution(absolutes, signs) {
    let nums = absolutes.map((num, i)=>signs[i] === true ? num : -(num))
    return nums.reduce((prev, cur)=> prev += cur, 0)
}