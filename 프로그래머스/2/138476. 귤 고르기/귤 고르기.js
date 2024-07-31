function solution(k, tangerine) {
    let answer = 0;
    let map = new Map();
    tangerine.forEach((tang)=>{
        map.set(tang, map.has(tang) ? map.get(tang) + 1 : 1);
    })
    const sortArr = [...map].sort((a, b) => b[1] - a[1])
    sortArr.forEach(arr => {
        if(k > 0) {
            k -= arr[1];    
            answer++;
        } 
    });
    return answer;
}