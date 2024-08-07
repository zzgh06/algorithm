// map 과 경우의 수 활용
// A종류의 옷 개수 + 1 ) * ... * (B종류의 옷 개수 + 1) - ( 모든 종류의 옷을 입지 않는 경우 = 1 )

function solution(clothes) {
    let hash = new Map();
    let answer = 1;
    for (const [name, type] of clothes){
        hash.set(type, (hash.get(type) || 0) +1)
    } 
    for (const [key, value] of hash){
        answer *= value + 1
    }
    return answer - 1
}