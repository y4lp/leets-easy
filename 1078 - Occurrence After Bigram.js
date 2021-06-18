/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let a = '', b = '', res = [];
    for (let word of text.split(' ')) {
        if (a == first && b == second) {
            res.push(word);
        }
        a = b;
        b = word;
    }
    return res;
};