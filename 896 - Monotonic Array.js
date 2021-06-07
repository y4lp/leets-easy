/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let res = true, dec = false, inc = false;
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] < A[i + 1]) inc = true;
        else if (A[i] > A[i + 1]) dec = true;
        if (inc && dec) {
            res = false;
            break;
        }
    }
    return res;
};