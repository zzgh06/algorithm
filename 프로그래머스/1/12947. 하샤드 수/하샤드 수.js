function solution(x) {
    const sum = String(x).split("").map(str=>Number(str)).reduce((acc,val)=>acc+val,0)
    const isHarshad = Number.isInteger(x / sum)
    return isHarshad;
}