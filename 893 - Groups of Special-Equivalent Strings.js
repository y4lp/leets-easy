/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    let s = new Set();
    for (let a of A) {
        let odd = [], even = [];
        for (let i = 0; i < a.length; i++) {
            if (i % 2 == 0) {
                even.push(a[i]);
            } else {
                odd.push(a[i]);
            }
        }
        s.add(even.sort().join('') + odd.sort().join(''));
    }
    return s.size;
};