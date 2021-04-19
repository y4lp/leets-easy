/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let maxsk = 1, cursk = 1;
    if (nums.length == 0) {
        return 0;
    }
    for (let i = 0; i < nums.length - 1; i++ ) {
        if (nums[i] < nums[i + 1]) {
            cursk++;
        } else {
            maxsk = Math.max(cursk, maxsk);
            cursk = 1;
        }
    }
    return Math.max(cursk, maxsk);
};
