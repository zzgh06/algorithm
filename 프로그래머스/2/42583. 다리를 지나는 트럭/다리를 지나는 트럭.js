// 큐 문제(선입 선출)

function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let time = 0;
    // console.log(bridge)
    
    while(bridge.length) {
        bridge.shift();
        if (truck_weights.length) {
            const sum = bridge.reduce((a,b) => a + b, 0)
            if (sum + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift())
            } else {
                bridge.push(0)
            }
        }
        time++
    }
    return time
}