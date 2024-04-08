function solution(a, b) {
    let res = 0
    a.forEach((a, i)=>{
       res += a * b[i]
    })
    return res
}