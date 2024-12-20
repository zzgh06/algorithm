function solution(numbers) {
    let ascending = numbers.sort((a,b) => a - b);
    return ascending[ascending.length - 1] * ascending[ascending.length - 2]
}