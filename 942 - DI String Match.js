/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let l = 0, r = s.length, i = 0;
    let res = [];
    for (let c of s) {
        if (c == 'I') {
            res.push(l++);
        } else {
            res.push(r--);
        }
    }
    res.push(l);
    return res;
};