// 한 번에 K 칸을 앞으로 점프 : 건전지 사용량이 든다
// (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동 : 건전지 사용량이 줄지 않는다

// 거리가 N 만큼 떨어져 있는 장소로 이동
// 단, 사용해야 하는 건전지 사용량의 최솟값을 return

// 아이디어
// 1. 도착할 지점(n)에서 거꾸로 돌아오면서 체크.
// 2. 이동한 지점이 홀수라는 건 이동하기 전 지점에서 순간 이동이 아닌 점프를 사용했다는 뜻입니다. 
// (현재 위치 x2를 통해 이동했을 때 홀수가 나올 수 없습니다)
function solution(n)
{
    let res = 0;
    
    while(n !== 0){
        if (n % 2 === 0){
            n /= 2;
        }
        if (n % 2 === 1){
            n -= 1
            res++;
        }
    }
    return res;
}