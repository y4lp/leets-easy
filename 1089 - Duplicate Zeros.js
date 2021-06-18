/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let q = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            q.push(0, 0);
        } else {
            q.push(arr[i]);
        }
        arr[i] = q.shift();
    }
};