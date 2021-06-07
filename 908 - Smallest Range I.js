/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let min = A[0], max = A[0];
    for (let a of A) {
        min = min < a ? min : a;
        max = max > a ? max : a;
    }
    let res = max - min;
    if (res >= 2 * K) {
        res -= 2 * K;
    } else {
        res = 0;
    }
    return res;
};