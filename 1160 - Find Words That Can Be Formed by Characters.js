/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let count = new Map();
    for (let c of chars) {
        if (count.has(c)) {
            count.set(c, count.get(c) + 1);
        } else {
            count.set(c, 1);
        }
    }
    let res = 0;
    for (let word of words) {
        let Tcount = new Map();
        for (let c of word) {
            if (Tcount.has(c)) {
                Tcount.set(c, Tcount.get(c) + 1);
            } else {
                Tcount.set(c, 1);
            }
        }
        let good = true;
        for (let k of Tcount.keys()) {
            if (!count.has(k)) {
                good = false;
            } else if (count.get(k) < Tcount.get(k)) {
                good = false;
            }
        }
        if (good) {
            res += word.length;
        }
    }
    return res;
};