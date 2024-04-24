// 실패한 사람은 제외되어야 하기때문에 임시 변수 people을 선언합니다.
// 스테이지의 개수만큼 반복문을 실행합니다.
// stages 안에 있는 숫자는 1사람이 실패한 stage를 나타내므로 filter()을 이용하여 개수를 파악합니다.
// answer배열에 [스테이지, 실패율]을 삽입합니다.
// 실패한 사람만큼 people을 빼줍니다.
// stages안에 있는 N+1은 모든 스테이지를 다 깬 사람이므로 배열에서 제외합니다.
// 실패율을 기준으로 내림차순으로 정렬한 뒤 스테이지만 answer에 남깁니다.

// 전체 스테이지의 개수 N,
// 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages

function solution(N, stages) {
    let result = [];
    for(let i = 1; i <= N; i++){
        // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 
        let reach = stages.filter((x) => x >= i).length;
        // 스테이지에 도달한 플레이어 수
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    // console.log(result) // [ [ 1, 0 ], [ 2, 0 ], [ 3, 0 ], [ 4, 1 ] ]
    // 실패율 기준으로 정렬
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}