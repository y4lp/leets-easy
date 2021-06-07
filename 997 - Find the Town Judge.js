/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let trustor = new Map(), trusts = new Map();
    for (let i = 1; i <= n; i++) {
        trustor.set(i, new Array());
        trusts.set(i, new Array());
    }
    for (let i = 0; i < trust.length; i++) {
        let a = trust[i][0], b = trust[i][1];
        trustor.get(b).push(a);
        trusts.get(a).push(b);
    }
    for (let key of trustor.keys()) {
        if (trustor.get(key).length == n - 1 && trusts.get(key).length == 0) {
            return key;
        }
    }
    return -1;
};