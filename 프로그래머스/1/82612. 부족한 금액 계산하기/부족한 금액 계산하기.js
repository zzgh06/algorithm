// price
// n배 요금
// count 만큼 타게되면 얼마나 모자르는지 return 만약 모자르지 않다면 0 를 return
function solution(price, money, count) {
    for (let i = 1; i <= count; i++) {
        money -= price * i
    }
    return money >= 0 ? 0 : Math.abs(money)
}