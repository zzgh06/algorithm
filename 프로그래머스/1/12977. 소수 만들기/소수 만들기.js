// 1. 주어진 숫자 중 서로 다른 3개를 뽑는다.
// 2. 서로 다른 3개를 골라 더한다. 
// 3. 소수 판별

function solution(nums) {
    let res = 0
    let arr = []
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++)
                // console.log(i, j, k)
                arr.push(nums[i] + nums[j] + nums[k]);
        }
    }
    arr.forEach(num => {
        // console.log(num)
        let decimal = true;
        for (let i = 2; i * i <= num; i++){
            if (num%i === 0) decimal = false;
        }
        res += decimal ? 1 : 0
    })
    return res
}