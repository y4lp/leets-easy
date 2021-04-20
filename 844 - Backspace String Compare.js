/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
    let skips = 0;
    let skipt = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] == '#') {
                skips++;
                i--;
            } else if (skips > 0) {
                skips--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (t[j] == '#') {
                skipt++;
                j--;
            } else if (skipt > 0) {
                skipt--;
                j--;
            } else {
                break;
            }
        }
        if (i >= 0 && j >= 0) {
            if (s[i] != t[j]) {
                return false;
            }
        } else {
            if (i >= 0 || j >= 0)
                return false;
        }
        i--;
        j--;

    }
    return true;
};