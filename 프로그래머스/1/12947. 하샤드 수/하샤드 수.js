function solution(x) {
    const sum = String(x).split("").map(str=>Number(str)).reduce((acc,val)=>acc+val,0);
    const 햐사드 = Number.isInteger(x / sum)
    return 햐사드;
}