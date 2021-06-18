/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let eq = Array(100).fill(0);
    let res = 0;
    for (let d of dominoes) {
        let val = d[0] <= d[1] ? d[0] * 10 + d[1] : d[1] * 10 + d[0];
        res += eq[val];
        eq[val]++;
    }
    return res;
};