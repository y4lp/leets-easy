/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
    if (a.length != b.length) return false;
    if (a == b) {
        let s = new Set();
        for (let c of a) {
            if (s.has(c)) {
                return true;
            } else {
                s.add(c);
            }
        }
        return false;
    } else {
        let pairs = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                pairs.push([a[i], b[i]]);
            }
        }
        return pairs.length == 2 && pairs[0][0] == pairs[1][1] && pairs[0][1] == pairs[1][0];
    }
};