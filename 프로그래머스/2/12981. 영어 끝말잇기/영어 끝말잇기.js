function solution(n, words) {
    let answer = [0, 0];
    let stack = [];
    for (let i = 0; i < words.length; i++) {
        if (i > 0 && (stack.includes(words[i]) 
            || stack.at(-1).at(-1) !== words[i][0])) {
            // 현재 단어가 이미 사용되었거나, 이전 단어의 마지막 문자와 일치하지 않으면 탈락
            let play = Math.floor(i / n) + 1;
            let person = (i % n) + 1;
            return [person, play];
        }
        stack.push(words[i]);
    }
    
    return answer;
}
