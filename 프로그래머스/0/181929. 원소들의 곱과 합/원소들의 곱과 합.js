function solution(num_list) {
    let 곱 = num_list.reduce((a, b) => a * b, 1)
    let 합 = num_list.reduce((a, b) => a + b, 0)
    return 곱 < 합*합 ? 1 : 0
}