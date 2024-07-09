function solution(s) {
    let sortNum = s.split(" ").map((x)=> Number(x)).sort((a, b) => a - b)
    return [sortNum[0], sortNum[sortNum.length -1]].join(" ")
}