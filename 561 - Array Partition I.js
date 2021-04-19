/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let res = 0;
    nums.sort((a, b) => a - b);
    let i = 0;
    // console.log(nums);
    for (let num of nums) {
        if (i % 2 == 0) {
            console.log(num);
            res += num;
        }
        i++;
    }
    // console.log(res);
    return res;
};

arrayPairSum([6214, -2290, 2833, -7908]);
console.log(__dirname);