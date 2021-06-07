/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let s = 0;
    for (let a of arr) s += a;
    if (s % 3 != 0) return false;
    let ps = Math.floor(s / 3);
    let p1 = false, p2 = false;
    s = 0;
    let i = 0;
    for (; i < arr.length; i++) {
        s += arr[i];
        if (s == ps) {
            s = 0;
            if (!p1) p1 = true;
            else if (!p2) {
                p2 = true;
                break;
            }
        }
    }
    return p1 && p2 && i != arr.length - 1;
};