function solution(todo_list, finished) {
    return todo_list.filter((elem, inx) => finished[inx] === false);
}