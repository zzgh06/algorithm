function solution(numbers) {
     var answer = 0;

    len = numbers.length
    for(i=0;i<len;i++){
        answer += numbers[i]
    }
    answer = answer/len
    return answer;
}