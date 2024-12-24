function solution(arr)
{
    return arr.filter((ele, idx) => ele !== arr[idx - 1])
}