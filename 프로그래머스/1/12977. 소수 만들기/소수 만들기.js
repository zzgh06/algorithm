// 1. 주어진 숫자 중 서로 다른 3개를 뽑는다.
// 2. 서로 다른 3개를 골라 더한다. 
// 3. 소수 판별

function solution(nums) {
    let answer = 0;
    let arr = [];

    // 1. 주어진 숫자 중 서로 다른 3개를 뽑는다.
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                // 2. 서로 다른 3개를 골라 더한다. 
                arr.push(nums[i] + nums[j] + nums[k]);
            };
        };
    };
    
    // 3. 소수 판별
    arr.forEach((num)=>{
        let decimal = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num%i === 0) decimal = false;
        }
        answer += (decimal ? 1 : 0)
    })
    return answer 
}
