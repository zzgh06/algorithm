// 1. hashMap 생성
// 2. 1스테이지부터 n스테이지까지 순회
// 3. 스테이지 통과한 사람 구하기
// 4. 스테이지 통과하지 못한 사람 구하기
// 5. 실패율 구하기
// 6. 해당 스테이지와 실패율을 key value 로 저장
// 7. 실패율에 따른 내림차순 정렬
// 8. 내림차순 정렬된 key 값만 출력
function solution(N, stages) {
    let answer = [];
    let hashmap = new Map();
    for (let i = 1; i <= N; i++){
        let clear = 0;
        let fail = 0;
        let failureRate = 0;
        for (let j = 0; j < stages.length; j++){
            if (stages[j] >= i) {
                clear++;
            }
            if (stages[j] === i) {
                fail++;
            }
        }
        failureRate = fail / clear;
        hashmap.set(i, failureRate)
    }
    let hashmapSort = [...hashmap].sort((a, b)=>b[1] - a[1]);
    return hashmapSort.map(hash => hash[0]);
}