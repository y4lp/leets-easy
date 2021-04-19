/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let count = 0, res = 0, last = 0, i = 0;
    let t = '';
    while (i < s.length) {
        t = s[i];
        count = 0;
        while (i < s.length && t == s[i]) {
            count++;
            i++;
        }
        res += Math.min(count, last);
        console.log(count);
        last = count;

    }
    return res;
};

countBinarySubstrings("00110");