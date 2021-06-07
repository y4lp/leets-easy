/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    let a = n.toString(2);
    let len = a.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        if (a[len - 1 - i] == '0') {
            res += Math.pow(2, i);
        }
    }
    return res;
};