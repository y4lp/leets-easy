/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
    let stack = [];
    let patt = /[a-zA-Z]/;
    for (let c of S) {
        if (patt.test(c)) {
            stack.push(c);
        }
    }
    let res = '';
    for (let c of S) {
        if (patt.test(c)) {
            res += stack.pop();
        } else {
            res += c;
        }
    }
    return res;

};