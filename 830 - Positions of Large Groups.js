/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let res = [];
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (i == s.length - 1 || s[i] != s[i + 1]) {
            if (count >= 3) {
                res.push([i - count + 1, i]);
            }
            count = 1;
        } else {
            count++;
        }
    }
    return res;
};