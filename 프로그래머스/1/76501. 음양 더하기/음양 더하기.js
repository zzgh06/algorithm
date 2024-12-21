function solution(absolutes, signs) {
    return absolutes.map((e, i) => signs[i] === true ? e : -(e)).reduce((a,b) => a += b, 0);
}