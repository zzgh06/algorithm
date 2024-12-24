// [A, B, C, D]
// [2, 1, 3, 2]
function solution(priorities, location) {
    // 큐 초기화 : 프로세스의 우선순위와 인덱스 객체로 저장
    const queue = priorities.map((priority, index) => ({ index, priority }));
    // console.log(queue) [{ index: 0, priority: 2 }, { index: 1, priority: 1 }, ...]
    let executionOrder = 0;
    while(queue.length) {
        let current = queue.shift()
        
        if (queue.some((x) => x.priority > current.priority)) {
            queue.push(current)
        } else {
            executionOrder++;
            if (current.index === location) return executionOrder
        }
    }
    return executionOrder;
}