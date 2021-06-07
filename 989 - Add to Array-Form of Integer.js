/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let res = []
    for (let i = num.length - 1; i >= 0; i--) {
        let sum = num[i] + k % 10;
        k = Math.floor(k / 10);
        if (sum >= 10) {
            sum -= 10;
            k++;
        }
        res.unshift(sum);
    }
    while (k > 0) {
        res.unshift(k % 10);
        k = Math.floor(k / 10);
    }
    return res;
};