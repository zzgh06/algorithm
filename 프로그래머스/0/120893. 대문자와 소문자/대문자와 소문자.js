function solution(my_string) {
    let swapped = "";
    let char = my_string.split("");
    char.map((str) => {
        if (str === str.toLowerCase()) {
            swapped += str.toUpperCase();
        } else {
            swapped += str.toLowerCase();
        }
    })
    return swapped
}