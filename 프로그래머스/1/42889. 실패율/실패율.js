function solution(N, stages) {
    let answer = [];
    // 1)
    let hashMap = new Map();

    // 2)
    for(let i=1; i<=N; i++) {
        let stage_clear = 0;
        let stage_fail = 0;
        let failure_rage = 0;

        // 3)
        for(let j=0; j<stages.length; j++) {
            if(i <= stages[j]) { 
                stage_clear += 1;
            }
        }

        // 4)
        for(let k=0; k<stages.length; k++) {
            if(stages[k] == i) {
                stage_fail += 1;
            }
        }

        // 5)
        failure_rage = stage_fail / stage_clear

        // 6)
        hashMap.set(i, failure_rage)
    }

    // 7)
    // Map(5) {1 => 0.125, 2 => 0.42857142857142855, 3 => 0.5, 4 => 0.5, 5 => 0}
    let sortedArr = [...hashMap].sort((a, b) => b[1] - a[1]); // Map 객체를 배열로 변환 후, 내림차순으로 정렬

    // 8)
    // sortedArr = [[ 3, 0.5 ], [ 4, 0.5 ], [ 2, 0.42857142857142855 ], [ 1, 0.125 ], [ 5, 0 ]];
    answer = sortedArr.map(e => e[0])

    return answer;
}