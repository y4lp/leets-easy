/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let counts = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (counts.has(nums[i])) {
            counts.get(nums[i])[0]++;
            counts.get(nums[i])[2] = i;
        } else {
            counts.set(nums[i], [1, i, i]);
        }
    }
    let maxcount = 0, minlen = 0;
    for (let i of counts.entries()) {
        let count = i[1][0],
            left = i[1][1],
            right = i[1][2];
        if (maxcount < count) {
            maxcount = count;
            minlen = right - left + 1;
        } else if (maxcount == count) {
            minlen = Math.min(minlen, right - left + 1);
        }

    }
    return minlen;
};


let a = findShortestSubArray([1, 2, 3, 4, 5, 4, 2]);
console.log(a);