/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let t = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        swap(t, i, i + k - 1)
    }
    return t.join('');
};
function swap(s, i, j) {
    j = Math.min(j, s.length - 1);
    let t;
    while (i < j) {
        t = s[i];
        s[i++] = s[j];
        s[j--] = t;
    }
}

console.log(reverseStr('nmslijk', 2));