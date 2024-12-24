// 목적 : 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시

// 많이 재생된 장르부터 비교해서 그중 많이 재생된 노래 2가지를 골라 베스트 앨범
// 1. {"classic" : 1450, "pop" : "3100"}

// 고유 번호는 genres[i], i로 구분
// 2. 고유번호, 장르, 재생횟수가 한데에 모아져있는 객체
// [ 
//     { genre: 'classic', index: 0, playCnt: 500 }, 
//     {...}
// ]
function solution(genres, plays) {
    let answer = [];
    let hash = new Map();
    genres.forEach((ele, idx) => {
        if(!hash.get(ele)) {
            hash.set(ele, plays[idx])
        } else {
            hash.set(ele, hash.get(ele) + plays[idx])
        }
    })
    
    let keyValueArr = [...hash.entries()]
    keyValueArr.sort((a,b) => b[1] - a[1]) // 	[ [ 'pop', 3100 ], [ 'classic', 1450 ] ]
    
    let allInfoObj = genres.map((g,i)=>({
        genre : g,
        index : i,
        playCnt : plays[i]
    }))
    
    // [ { genre: 'classic', index: 0, playCnt: 500 } ...]
    
    keyValueArr.forEach((key, idx) => {
        let current = [];
        // console.log(key[0]) // pop, classic
        for (let j = 0; j < allInfoObj.length; j++) {
            // console.log(allInfoObj[j].genre)
            if (key[0] === allInfoObj[j].genre) {
                current.push(allInfoObj[j]);
            }
        }
        current.sort((a, b) => b.playCnt - a.playCnt)
        // console.log(current)
        current.forEach((e, idx) => {
            if (idx < 2) {
                answer.push(e.index)
            }
        })
    })
    return answer
}