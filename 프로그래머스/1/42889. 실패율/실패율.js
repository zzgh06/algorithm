// 1. hashMap 생성
// 2. 1스테이지부터 n스테이지까지 순회
// 3. 스테이지 통과한 사람 구하기
// 4. 스테이지 통과하지 못한 사람 구하기
// 5. 실패율 구하기
// 6. 해당 스테이지와 실패율을 key value 로 저장
// 7. 실패율에 따른 내림차순 정렬
// 8. 내림차순 정렬된 key 값만 출력
function solution(N, stages) {
    var answer = [];
    let hashMap = new Map();
    
    for (let i = 1; i <= N; i++){
        let clear = 0;
        let failure = 0;
        let failureRate = 0;
        for (let j = 0; j < stages.length; j++){
            if (i <= stages[j]){clear += 1;}
        }
        for (let k = 0; k < stages.length; k++){
            if (i == stages[k]){failure += 1;}
        }
        failureRate = failure / clear
        hashMap.set(i, failureRate)
    }
    let sortedHashMap = [...hashMap].sort((a, b) => b[1] - a[1]);
    answer = sortedHashMap.map(hash => hash[0])
    return answer
}