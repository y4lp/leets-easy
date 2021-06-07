/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let count = new Map();
    for (let n of nums) {
        if (count.has(n)) {
            count.set(n, count.get(n) + 1);
        } else {
            count.set(n, 1);
        }
        if (count.get(n) >= 2) {
            return n;
        }
    }
    return 23333333333;
};