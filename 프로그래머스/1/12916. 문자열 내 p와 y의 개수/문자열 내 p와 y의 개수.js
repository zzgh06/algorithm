// 문자열 s에서 p와 y의 갯수를 비교해서 같으면 true 틀리면 false 반환
// 대소문자로 이루어져 있기 때문에 모두 대문자 혹은 소문자로 변환
// 그리고 p와 y의 갯수를 비교 => split 활용 : 특정 문자를 기준으로 자르기 때문에 몇개인지 알 수 잇음
function solution(s){

    let plength = s.toUpperCase().split('P').length - 1;
    let Ylength = s.toUpperCase().split('Y').length - 1;

    return plength == Ylength ? true : false;
}