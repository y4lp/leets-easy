/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let left = -1, right = -1, gap = 0, i = 0;
    let b = n.toString(2);
    for (let d of b) {
        if (d == '1') {
            if (left == -1) {
                left = i;
            } else {
                right = i;
                gap = gap > (right - left) ? gap : right - left;
                left = right;
                right = -1;
            }
        }
        i++;
    }
    return gap;
};