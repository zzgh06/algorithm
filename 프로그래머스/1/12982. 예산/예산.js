function solution(d, budget) {
    let ans = 0
    let depart = d.sort((a, b) => a - b)
    depart.forEach((ele) => {
        if (budget >= ele) {
            budget -= ele
            ans++
        } else {
            return ans
        }
    })
    return ans
}