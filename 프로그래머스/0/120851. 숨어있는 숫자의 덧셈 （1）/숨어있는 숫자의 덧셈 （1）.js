function solution(my_string) {
  const characters = my_string.split("");
  let result = 0;
  
  characters.forEach(char => {
    if (!isNaN(Number(char))) {
      result += Number(char);
    }
  });
  
  return result;
}