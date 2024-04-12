function solution(t, p) {
    var answer = 0;
    const plength = p.length;
    t.split("").forEach((start, index)=>{
        const sliceStr = t.slice(index, index + plength)
        if (sliceStr.length === plength) {
            answer += (Number(sliceStr) <= Number(p));
        }
    })
    return answer;
}