/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let y = Number.parseInt(date.substr(0, 4));
    let m = Number.parseInt(date.substr(5, 2));
    let d = Number.parseInt(date.substr(8, 2));
    let leap = y % 400 == 0 || (y % 4 == 0 && y % 100 != 0);
    let mday = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let res = 0;
    for (let i = 0; i < m; i++) {
        if (i == m - 1) {
            res += d;
        } else if (i == 1 && leap) {
            res += 29;
        } else {
            res += mday[i];
        }
    }
    return res;
};