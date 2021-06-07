/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let res = '', d = 0;

    for (let c of s) {
        if (c == ')') d--;
        if (d > 0) res += c;
        if (c == '(') d++;
    }
    return res;
};