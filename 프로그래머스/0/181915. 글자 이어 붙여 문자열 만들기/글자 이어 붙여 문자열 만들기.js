function solution(my_string, index_list) {
    let ans = ''
    let char = my_string.split("")
    for (let i = 0; i < index_list.length; i++) {
        ans += (char[index_list[i]])
    }
    return ans
}