/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let s = new Set(banned);
    let m = new Map();
    let temp = '';
    let patt = /[a-zA-Z]/;
    paragraph = paragraph.toLowerCase();
    paragraph += '.';
    for (let c of paragraph) {
        if (patt.test(c)) {
            temp += c;
        } else if (temp.length > 0) {
            if (!s.has(temp)) {
                if (!m.has(temp)) {
                    m.set(temp, 0);
                }
                m.set(temp, m.get(temp) + 1);
            }
            temp = '';
        }
    }
    let res = '';
    let max = 0;
    for (let [word, count] of m.entries()) {
        
        if (max < count) {
            max = count;
            res = word;
        }
    }
    return res;
};