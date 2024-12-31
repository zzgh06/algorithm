// n번째 글자를 기준으로 오름차순 정렬
// 인덱스[n] 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치

function solution(strings, n) {
    return strings.sort().sort((a, b) => a[n] < b[n] ? -1 : 0);
}