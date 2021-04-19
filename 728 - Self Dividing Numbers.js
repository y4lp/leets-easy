/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];
    for (let i = left; i <= right; i++) {
        if (check(i)) res.push(i);
    }
    return res;
};

/**
 * 
 * @param {number} num 
 * @return {bool}
 */

function check(num) {
    let x = num, y = 0;
    while (x > 0) {
        y = x % 10;
        x = Math.floor(x / 10);
        if (y == 0 || num % y != 0) {
            return false;
        }
    }
    return true;
}