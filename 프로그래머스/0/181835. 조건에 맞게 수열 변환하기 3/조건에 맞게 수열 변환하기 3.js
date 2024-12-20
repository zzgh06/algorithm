function solution(arr, k) {
    var answer = [];
    return arr.map(ele => {
        if (k%2 === 1){
            return ele * k
        } else {
            return ele + k
        }
    });
}