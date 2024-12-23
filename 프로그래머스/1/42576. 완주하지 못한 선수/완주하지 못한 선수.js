function solution(participant, completion) {
    let hashMap = new Map();
    participant.forEach(part => {
        if (!hashMap.get(part)) {
            hashMap.set(part, 1)
        } else {
            hashMap.set(part, hashMap.get(part) + 1)
        }
    })
    
    completion.forEach(comp => {
        if (hashMap.get(comp)) {
            hashMap.set(comp, hashMap.get(comp) - 1)
        } 
    })
    
    for (let [key, value] of hashMap) {
        if (value > 0) return key
    }
}