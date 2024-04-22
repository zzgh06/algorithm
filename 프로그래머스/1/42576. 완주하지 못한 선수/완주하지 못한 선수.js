// completion의 길이는 participant의 길이보다 1 작으므로
// participant 배열의 값을 key로 value를 인원수로 해서 hash에 넣고
// hash에서 completion의 배열을 key 값으로 이용해서 일치할 경우 -1
function solution(participant, completion) {
    let answer = ''
    let hashMap = new Map();
    
    participant.forEach((participant) => {
        if (hashMap.get(participant)) {
            hashMap.set(participant, hashMap.get(participant) + 1)
        } else {
            hashMap.set(participant, 1)
        }
    })
    // console.log(hashMap.values())
    completion.forEach((completion) => {
        if (hashMap.get(completion)) {
            hashMap.set(completion, hashMap.get(completion) - 1)
        }
    })
    // console.log(hashMap.values())
    for (const [key, value] of hashMap){
        if (value > 0) {
            return key
        }
    }
}