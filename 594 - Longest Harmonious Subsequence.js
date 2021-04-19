/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    let res = 0;
    for (let [key, value] of map) {
        if (map.has(key + 1)) {
            res = Math.max(res, map.get(key + 1) + value);
        }
    }
    return res;
};