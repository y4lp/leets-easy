/**
 * @param {number} num
 * @return {string}
 */
function divmod(num, div) {
    let res = [Math.floor(num / div), num % div];
    return res;
}
var convertToBase7 = function(num) {
    let subzero = false;
    if (num < 0) {
        num = -num;
        subzero = true;
    }
    let a, b;
    let res = [];
    do {
        [a, b] = divmod(num, 7);
        res.unshift(b.toString());
        num = a;
    } while (a >= 7);
    if (a > 0) {
        res.unshift(a.toString());
    }
    if (subzero) {
        res.unshift('-');
    }
    
    return res.join('');
};

console.log(convertToBase7(-100));