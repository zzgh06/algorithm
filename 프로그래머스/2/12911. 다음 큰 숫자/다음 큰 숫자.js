function solution(n) {
    let result = n+1;
    let binaryN = n.toString(2).split('').filter((v)=> v === '1').length;
    while(n < result) {
        let binaryResult = result.toString(2).split('').filter((v)=> v === '1').length;
        if (binaryN === binaryResult){
            break
        }
        result++;
    }
    return result
}