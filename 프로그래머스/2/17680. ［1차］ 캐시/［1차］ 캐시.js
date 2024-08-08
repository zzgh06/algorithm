// LRU(Least Recently Used) : 캐시에서 가장 사용한지 오래된 캐시를 지우는 알고리즘
// 즉, 캐시크기가 꽉 찼고 새로운 값을 캐시에 넣을 때, 캐시 내에서 사용한지 가장 오래된 값을 지우고 새로운 값을 캐시에 넣는다.
// 캐시 크기가 0일 경우는 캐시가 없으므로 모든 값이 cache miss

function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    cities = cities.map(it => it.toUpperCase())
    
    if (cacheSize === 0) return cities.length * 5
    
    // 배열을 순회하며 cache hit이면 배열의 맨뒤로 푸시하고 
    // cache miss일때는 (배열이 꽉찼다면 맨앞을 제거하고) 배열의 맨뒤로 푸시한다.
    for (const city of cities){
        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
            answer++;
        } else {
            if (cache.length === cacheSize) {
                cache.shift()
            }
            cache.push(city);
            answer += 5
        }
    }
    return answer;
}