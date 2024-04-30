function solution(sizes) {
  let answer = 0;
  sizes.forEach((v, idx) => {
    sizes[idx] = v.sort((a, b) => a - b);
  });

  const w = sizes.map((v) => v[0]);
  const h = sizes.map((v) => v[1]);
  answer = Math.max(...w) * Math.max(...h);
  return answer;
}