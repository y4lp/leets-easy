/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let s1 = str1 + str2, s2 = str2 + str1;
    if (s1 == s2) {
        return s1.substring(0, gcd(str1.length, str2.length));
    } else {
        return '';
    }
};

function gcd (a, b) {
    let r = a % b;
    while (r != 0) {
        a = b;
        b = r;
        r = a % b;
    }
    return b;
}