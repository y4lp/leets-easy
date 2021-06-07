/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    let res = [], dec = 0;
    for (let n of nums) {
        dec = (dec * 2 + n) % 5;
        res.push(dec == 0);
    }
    return res;
};