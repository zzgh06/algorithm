function solution(s){
    let pLength = s.split('').map(x => x.toUpperCase()).filter(p => p === 'P').length
    let yLength = s.split('').map(x => x.toUpperCase()).filter(y => y === 'Y').length
    
    return pLength === yLength ? true : false
}