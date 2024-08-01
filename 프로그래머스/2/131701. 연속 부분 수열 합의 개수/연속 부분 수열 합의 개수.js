function solution(elements) {
    // 원형 수열
    const circular = elements.concat(elements);
    // Set 중복 제거
    const set = new Set();
    
    // 이중 포문으로 부분 수열
    for (let i = 0; i < elements.length; i++){
        let sum = 0;
        for (let j = 0; j < elements.length; j++){
            sum += circular[i + j];
            set.add(sum)
        }
    }
    return set.size;
}