function solution(n)
{
    return n.toString().split("").map(ele => {
        return Number(ele)
    }).reduce((a,b) => a += b, 0)
}