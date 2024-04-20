// 1. 해시 테이블 생성
// 2. 참가자 이름 세기 key(이름) value 1 (동명이인이 있으면 value +1)
// 3. 완주자 이름 세기 key(이름) value 1 (동명이인이 있으면 value -1)
// 4. value 1만 출력 (완주하였으면 value 0 완주하지 못하였으면 value 1) >>> for of 문 활용
function solution(participant, completion) {
    let answer = ''
    let hashMap = new Map();
    
    participant.forEach((participant) => {
        if (hashMap.get(participant)){
            hashMap.set(participant, hashMap.get(participant) + 1)
        } else {
            hashMap.set(participant, 1)
        }
    })
    
    completion.forEach((completion) => {
        if (hashMap.get(completion)){
            hashMap.set(completion, hashMap.get(completion) - 1)
        }
    })
    
    for (const [key, value] of hashMap) {
        if (value >= 1) {
            answer += key
        }
    }
    return answer
}