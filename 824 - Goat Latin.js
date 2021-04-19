/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let words = S.split(' ');
    let vowel = 'aeiouAEIOU';
    let s = new Set(vowel);
    let res = '';
    let ap = 'a';
    for (let word of words) {
        let fst = word[0];
        if (s.has(fst)) {
            res += word;
        } else {
            res += word.substr(1);
            res += fst;
        }
        res += 'ma';
        res += ap;
        ap += 'a';
        res += ' ';
    }
    res = res.substr(0, res.length - 1);
    return res;
};