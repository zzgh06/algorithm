// [
//     [1,0,1,1,1],
//     [1,0,1,0,1],
//     [1,0,1,1,1],
//     [1,1,1,0,1],
//     [0,0,0,0,1]
// ]
// bfs 문제(최단거리)
// 방향 설정(동서남북)
// maps의 범위를 벗어나거나 0 즉 벽으로 되어 있는 부분으로 이동할 수 없음(예외처리)
// 진영에 도착할 수 없을 경우 -1를 리턴

function solution(maps) {
    let n = maps.length // 5
    let m = maps[0].length // 5
    let dx = [0, 0, -1, 1]
    let dy = [-1, 1, 0, 0]
    
    let bfs = () => {
        let queue = [[0, 0, 1]]
        while (queue.length) {
            let [x, y, count] = queue.shift(); // 0 0 1
            if (x === n - 1 && y === m - 1) {
                return count;
            }
            for (let i = 0; i < dx.length; i++){
                let next_x = x + dx[i]
                let next_y = y + dy[i]
                if (next_x >= 0 && next_x < n && next_y >= 0 && next_y < m && maps[next_x][next_y] === 1) {
                    queue.push([next_x, next_y, count + 1])
                    maps[next_x][next_y] = 0
                }
            }
        }
        return -1
    }
    return bfs()
}