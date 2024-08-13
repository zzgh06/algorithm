// 원소 중복 허용
// 교집합 / 합집합 * 65536
// 두 글자씩 끊기
// 영문자 쌍으로만 허용, 공백이나 숫자 특수문자는 버린다
// 공집합일 경우 = 1

function solution(str1, str2) {
    
    // 정규표현식으로 영문자로만 이루어진 쌍만 저장
    function rex(text){
        let result = [];
        for (let i = 0; i < text.length - 1; i++){
            let node = text.substr(i, 2) 
            if (node.match(/[A-Za-z]{2}/)) {
                result.push(node.toLowerCase())
            }
        }
        return result
    }
    
    let arr1 = rex(str1);
    let arr2 = rex(str2);
    
    // Set 으로 집합 자료구조로 변환
    let set = new Set([...arr1, ...arr2]);
    console.log(set)
    let union = 0;
    let intersection = 0;
    
    // 자카드 유사도 다중집합
    set.forEach((item) => {
        let has1 = arr1.filter(x => x === item).length;
        let has2 = arr2.filter(x => x === item).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })
    
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}