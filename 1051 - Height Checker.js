/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let res = 0, count = Array(101).fill(0);
    for (let h of heights) {
        count[h]++;
    }
    for (let i = 1, j = 0; i < 101; i++) {
        while (count[i]-- > 0) {
            if (heights[j++] != i) res++;
        }
    }
    return res;
};