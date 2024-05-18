// 객체를 만들어 점수를 저장한다.
// ex) {may: 5, kein: 10, kain: 1, radi: 3}
// 각 포토 마다의 점수를 배열로 구해야 하므로 map을 이용한다.
// 각 요소 배열을 reduce 메서드를 이용해 점수를 구한다.
// memory 객체에 해당 사람이 있으면 점수를 없으면 0을 더해준다
function solution(name, yearning, photo) {
    const point = {}
    for (let i = 0; i < name.length; i++) {
        point[name[i]] = yearning[i]
    }
    return photo.map((name) => 
        // console.log(name)
        name.reduce((prev, cur) => 
            // console.log(prev, cur)
            prev + (point[cur] || 0), 0))
}