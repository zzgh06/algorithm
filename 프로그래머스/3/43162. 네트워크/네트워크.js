function solution(n, computers) {
    let answer = 0;
    let length = computers.length
    let visited = Array.from({length : n}, () => false)
    // console.log(visited)
    
    function dfs(idx) {
        visited[idx] = true;
        
        for (let i = 0; i < length; i++) {
            if (computers[idx][i] === 1 && !visited[i]) {
                dfs(i)
            }
        }
    }
    
    for (let j = 0; j < length; j++) {
        if (!visited[j]) {
          dfs(j);
          answer++;
        }
    }
    return answer;
}