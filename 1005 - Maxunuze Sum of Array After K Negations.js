/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    let res = 0;
    for (let i = 0; i < k; i++) {
        nums.sort((a, b) => a - b);
        nums[0] *= -1;
    }
    for (let n of nums) {
        res += n;
    }
    return res;
};