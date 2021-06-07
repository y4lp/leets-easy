/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let count = new Map();
    for (let word of A.split(' ')) {
        if (count.has(word)) {
            count.set(word, count.get(word) + 1);
        } else {
            count.set(word, 1);
        }
    }
    for (let word of B.split(' ')) {
        if (count.has(word)) {
            count.set(word, count.get(word) + 1);
        } else {
            count.set(word, 1);
        }
    }
    let res = [];
    for (let word of count.keys()) {
        if (count.get(word) == 1) {
            res.push(word);
        }
    }
    return res;
};

let b = "this apple is sweet";
let a = "this apple is sour";
let c = uncommonFromSentences(a, b);
console.log(c);