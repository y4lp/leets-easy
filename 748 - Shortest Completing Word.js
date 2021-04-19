/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
let m = new Map();
var shortestCompletingWord = function (licensePlate, words) {
    let res = 'asdjioioajsdadsjioasdj';
    let patt = /[a-zA-Z]/;
    m.clear();
    for (let c of licensePlate) {
        if (patt.test(c)) {
            c = c.toLowerCase();
            if (m.has(c)) {
                m.set(c, m.get(c) + 1);
            } else {
                m.set(c, 1);
            }
        }
    }

    for (let word of words) {
        if (check(word)) {
            res = word.length < res.length ? word : res;
        }
    }
    return res;
};

function check(word) {
    for (let c of m.keys()) {
        let p = new RegExp(c, "g");
        let arr = word.match(p);
        let count = arr == null ? 0 : arr.length;
        if (count >= m.get(c)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}