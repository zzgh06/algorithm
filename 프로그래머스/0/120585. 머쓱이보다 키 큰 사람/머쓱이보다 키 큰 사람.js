function solution(array, height) {
    return array.filter((big) => big > height).length;
}