function solution(num_str) {
    return num_str.split("").map(num => Number(num)).reduce((a,b) => a += b, 0);
}