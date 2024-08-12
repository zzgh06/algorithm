function solution(priorities, location) {
    // 큐 초기화 : 프로세스의 우선순위와 인덱스 객체로 저장
    const queue = priorities.map((priority, index) => ({ index, priority }));
    let executionOrder = 0;
    
    while(queue.length){
        const current = queue.shift();
        // 큐에 우선순위가 높은 작업이 있을 경우 큐 맨 뒤로 보낸다.
        if (queue.some((item) => item.priority > current.priority)){
            queue.push(current)
        } else {
            // 그렇지 않으면 프로세스를 실행하고, 실행 순서를 증가
            executionOrder++;
            // 현재 프로세스가 location 가 일치할 경우 executionOrder 반환
            if (current.index === location) return executionOrder;
        }
    }
    return executionOrder;
}