/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n == 0) {
        return 0;
    } else if (n <= 2) {
        return 1;
    }
    let a = 0, b = 1, c = 1, d = 0;
    for (let i = 0; i < n - 2; i++) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    return d;
};