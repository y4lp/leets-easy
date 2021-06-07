/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    let points = [a, b, c], res = [0, 0];
    points.sort((x, y) => x - y);
    let diff1 = points[2] - points[1], diff2 = points[1] - points[0];
    let mindiff = Math.min(diff1, diff2);
    let maxdiff = Math.max(diff1, diff2);
    if (mindiff == 1 && maxdiff == 1) {
        res[0] = 0;
    } else if (mindiff <= 2) {
        res[0] = 1;
    } else {
        res[0] = 2;
    }
    res[1] = diff1 + diff2 - 2;
    return res;

};