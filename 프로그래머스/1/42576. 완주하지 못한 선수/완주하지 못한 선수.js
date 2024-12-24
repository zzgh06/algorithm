function solution(participant, completion) {
    let hashMap = new Map();
    
    participant.forEach((ele) => {
        if (!hashMap.get(ele)) {
            hashMap.set(ele, 1)
        } else {
            hashMap.set(ele, hashMap.get(ele) + 1)
        }
    })
    
    completion.forEach((ele) => {
        if (hashMap.get(ele)) {
            hashMap.set(ele, hashMap.get(ele) - 1)   
        }
    })
    
    for (let [key, value] of hashMap) {
        if (value > 0) return key
    }
}