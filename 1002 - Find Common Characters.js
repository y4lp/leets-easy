/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let count = new Map();
    for (let c of words[0]) {
        if (count.has(c)) {
            count.set(c, count.get(c) + 1);
        } else {
            count.set(c, 1);
        }
    }
    for (let i = 1; i < words.length; i++) {
        for (let c of count.keys()) {
            let patt = new RegExp(c, 'g');
            let arr = words[i].match(patt);
            count.set(c, Math.min(arr == null ? 0 : arr.length, count.get(c)));
        }
    }
    let res = [];
    for (let c of count.keys()) {
        for (let i = 0; i < count.get(c); i++) {
            res.push(c);
        }
    }
    return res;
};