/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0, j = s.length - 1;
    for(; i < j && s[i] == s[j]; i++, j--);
    return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j);
};

function isPalindrome(s, st, ed) {
    for(let i = st, j = ed; i < j; i++, j--) {
        if (s[i] != s[j]) {
            return false;
        }
    }
    return true;
}