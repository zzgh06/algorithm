function solution(s) {
    let result = []; 
    let tmp = []; 
    
    for(let i = 0; i < s.length; i++){
        if(!tmp.includes(s[i])){
            result.push(-1); // -1 -1 -1
            tmp.push(s[i]); // b a n
        } else if(tmp.includes(s[i])){
            result.push(i - tmp.lastIndexOf(s[i])); // -1 -1 -1 2 2 2 
            tmp.push(s[i]); // b a n a n a
        }
        
    }
    return result;
}