/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let res = '';
    let s = new Set(words);
    for (let word of s) {
        let flag = true;
        for (let i = 1; i < word.length; i++) {
            if (!s.has(word.substring(0, i))) {
                flag = false;
                break;
            }
        }
        if (flag && ((word.length > res.length) || (word.length == res.length && word < res))) {
            res = word;
        }
    }
    return res;
};