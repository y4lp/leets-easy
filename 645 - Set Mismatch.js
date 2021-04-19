/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [-1, -1];
    let counts = new Array(nums.length);
    counts = counts.fill(0);
    for (let index = 0; index < nums.length; index++) {
        counts[nums[index] - 1]++;
    }
    for (let index = 0; index < counts.length; index++) {
        if (counts[index] == 2) res[0] = index + 1;
        if (counts[index] == 0) res[1] = index + 1;
    }
    return res;
};