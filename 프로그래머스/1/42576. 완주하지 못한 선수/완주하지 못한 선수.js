// participant : 참여한 선수가 담긴 배열
// completion : 완주한 선수들의 이름이 담긴 배열

// 완주하지 못한 선수의 이름을 return 

// 이 문제는 해시를 이용하여 key : value 형태로 저장하여 완주했을 경우 value 값을 조정해주면 될 것 같습니다. 
function solution(participant, completion) {
    // 먼저 해시를 먼저 만들어 줍니다.
    let hashMap = new Map();
    
    // 참여 선수 배열을 순회하면서 해시에 저장합니다.     
    participant.map(part => {
        if (!hashMap.get(part)) {
            hashMap.set(part, 1)
        } else {
            hashMap.set(part, hashMap.get(part) + 1)
        }
    })
    
    // 완주 선수 배열를 순회하면서 hashMap의 키를 이용하여 있는지 확인하고 잇으면 해당 키값의 밸류 값을 빼줍니다
    completion.map(comp => {
        if (hashMap.get(comp)) {
            hashMap.set(comp, hashMap.get(comp) - 1)
        }
    })
    
    // for...of 로 해시를 순회하면서 value 가 1인 경우인 키 값을 출력해줍니다.
    for (let [key, value] of hashMap) {
        if (value > 0) return key
    }
}