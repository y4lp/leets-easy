/**
 * @param {number} num
 * @return {boolean}
 */
function divmod(x, y) {
    return [Math.floor(x / y), x % y];
}
var checkPerfectNumber = function(num) {
    let s = 0;
    let x = [];
    for (let i = 1; i * i <= num; i++) {
        x = divmod(num, i);
        if (x[1] == 0) {
            s += i;
            if (x[0] != i) {
                s += x[0];
            }
        }
    }
    s -= num;
    return s == num;
};

console.log(checkPerfectNumber(28));