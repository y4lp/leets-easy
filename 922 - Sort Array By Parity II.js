/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = 0, odd = 1, n = nums.length;
    while (even < n && odd < n) {
        while (nums[even] % 2 == 0) even += 2;
        while (nums[odd] % 2 == 1) odd += 2;
        if (odd < n && even < n) {
            let t = nums[odd];
            nums[odd] = nums[even];
            nums[even] = t;
        }
    }
    return nums;
};