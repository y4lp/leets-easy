/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let ls = 0, rs = nums.reduce((a, b) => a + b);
    let res = -1;
    for (let i = 0; i < nums.length; i++) {
        ls = ls + (i - 1 >= 0 ? nums[i - 1] : 0);
        rs = rs - nums[i];
        if (ls == rs) {
            return i;
        }
    }
    return res;
};