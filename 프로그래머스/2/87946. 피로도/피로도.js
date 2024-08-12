// dungeons 배열의 소모 피로도 순으로 정렬 (실패)

// dfs 깊이 우선 탐색
// DFS를 활용하여 현재 피로도로 각 던전을 방문하여 최대로 탐험할 수 있는 던전 수를 계산
// answer의 최대값을 반환함
function solution(k, dungeons) {
    let answer = 0;
    const visited = new Array(dungeons.length).fill(false)
    
    function dfs(k, count){
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]){
                // 방문 처리
                visited[i] = true;
                //  현재 피로도 감소 - 소모 피로도
                dfs(k - dungeons[i][1], count + 1);
                // dfs 종료 후 방문을 끝내준다.
                visited[i] = false;
            }
        }
        answer = Math.max(answer, count);
    }
    dfs(k, 0);
    return answer;
}