function solution(numbers, target) {
    let answer = 0;
    function dfs(idx, sum) {
        // 탈출 조건
        if (idx === numbers.length) {
            if (sum === target) answer++
            return
        }
        
        // 2. 수행동작
        dfs(idx + 1, sum + numbers[idx])
        dfs(idx + 1, sum - numbers[idx])
    }
    
    dfs(0, 0)
    return answer;
}