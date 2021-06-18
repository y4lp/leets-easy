/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let f = Array(1001).fill(0), res = Array(arr1.length).fill(0);
    let idx = 0;
    for (let n of arr1) {
        f[n]++;
    }
    for (let n of arr2) {
        for (let i = 0; i < f[n]; i++) {
            res[idx++] = n;
        }
        f[n] = 0;
    }
    for (let i = 0; i < f.length; i++) {
        for (let j = 0; j < f[i]; j++) {
            res[idx++] = i;
        }
    }
    return res;
};