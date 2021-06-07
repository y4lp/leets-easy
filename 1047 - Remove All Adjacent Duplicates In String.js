/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let res = [];
    for (let c of s) {
        if (res.length == 0 || res[res.length - 1] != c) {
            res.push(c);
        } else {
            res.pop();
        }
    }
    return res.join('');
};