function solution(t, p) {
    let res = 0
    for (let i = 0; i < t.length - p.length + 1; i++){
        if (Number(t.substr(i, p.length)) <= Number(p)) {
            res++;
        }
    }
    return res
}