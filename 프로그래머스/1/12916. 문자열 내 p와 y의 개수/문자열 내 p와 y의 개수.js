function solution(s){
    var answer = true;
    let P = s.toUpperCase().split('P').length - 1;
    let Y = s.toUpperCase().split('Y').length - 1;

    return P === Y ? true : false
}