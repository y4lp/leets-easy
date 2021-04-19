/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.split(' ');
    let i = 0;
    for (let word of words) {
        word = word.split('').reverse().join('');
        words[i++] = word;
    }
    return words.join(' ');
};