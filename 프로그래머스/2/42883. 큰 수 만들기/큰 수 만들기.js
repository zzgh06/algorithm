function solution(number, k) {
    let stack = [];
    for (const num of number) {
        // console.log(num)
        while(k > 0 && stack[stack.length - 1] < num) {
            stack.pop()
            k--
        }
        stack.push(num)
    }
    console.log(stack.length, k)
    stack.splice(stack.length - k, k);
    return stack.join("")
}