/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let res = [0, 0];
    if (s.length > 0) {
        res[0] = 1;
    }
    for (let c of s) {
        res[1] += widths[c.charCodeAt() - 97];
        if (res[1] > 100) {
            res[0]++;
            res[1] = widths[c.charCodeAt() - 97];
        }
    }
    return res;
};