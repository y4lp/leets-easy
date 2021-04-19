/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = Array(s.length);
    let prev = -s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            prev = i;
        }
        res[i] = i - prev;
    }
    prev = s.length * 2;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == c) {
            prev = i;
        }
        res[i] = Math.min(res[i], prev - i);
    }
    return res;
};