function solution(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    // 40 50 50 50 / 100
    while(left <= right) {
        if (people[left] + people[right] <= limit){
            left++;
        }
        right--;
        count++;
    }
    return count
}