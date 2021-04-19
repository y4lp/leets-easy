/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    let col = nums[0].length;
    if (nums.length * col != r * c) {
        return nums;
    }
    let res = new Array();
    for (let i = 0; i < r; i++) {
        res[i] = new Array();
    }
    let count = 0;
    while (count < r * c) {
        res[Math.floor(count / c)][count % c] = nums[Math.floor(count / col)][count % col]
        count++;
    }
    return res;

};

matrixReshape([[1, 2], [3, 4]], 1, 4);
