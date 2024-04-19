// 대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에 배열에서 중복값 제거
// 최대 N/2마리를 가져가야 함 
function solution(nums) {
    let monster = [...new Set(nums)];
    let maxChoice = nums.length / 2;
    return monster.length > maxChoice ? maxChoice : monster.length;
}