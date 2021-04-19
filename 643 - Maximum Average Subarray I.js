/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let res = sum / k;
    for (let i = 1; i <= nums.length - k; i++) {
        sum = sum - nums[i - 1] + nums[i + k - 1];
        res = Math.max(res, sum / k);

    }
    return res;
};