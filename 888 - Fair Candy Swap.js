/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let at = 0, bt = 0;
    for (let i of A) {
        at += i;
    }
    for (let i of B) {
        bt += i;
    }
    let cons = Math.floor((at - bt) / 2);
    let s = new Set(A);
    let res = [];
    for (let y of B) {
        let x = y + cons;
        if (s.has(x)) {
            res = [x, y];
        }
    }
    return res;
};