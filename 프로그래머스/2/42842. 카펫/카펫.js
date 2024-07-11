// 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
// yellow를 1개이상 둘러싸려면, 세로(높이)는 최소 3이상
// brown + yellow = 가로 * 세로
function solution(brown, yellow) {
    const totalTiles = brown + yellow;
    for (let h = 3; h <= Math.sqrt(totalTiles); h++) {
        if (totalTiles % h === 0) {
            let w = totalTiles / h;
            if (2 * w + 2 * h - 4 === brown) {
                return [w, h];
            }
        }
    }
}