function solution(absolutes, signs) {
    let ans = 0
    absolutes.forEach((num, i)=>{
        if (signs[i]== true){
            ans += num
        } else {
            ans += num * -1
        }
    })
    return ans
}