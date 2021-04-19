/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length == 1) return 0;
    let max = nums[0], res = 0;
    for (let i = 1; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
            res = i;
        }
    }
    nums.sort((a, b) => a - b);
    return nums[nums.length - 1] >= nums[nums.length - 2] * 2 ? res : -1;
};