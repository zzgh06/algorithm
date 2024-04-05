function solution(n){
    let ans = 0
    let 문자변환 = String(n)
    for (let i = 0; i < 문자변환.length; i++) {
        ans += parseInt(문자변환[i])
    }
    return ans
}