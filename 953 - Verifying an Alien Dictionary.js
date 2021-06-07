/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let idx = new Array(26);
    for (let i = 0; i < 26; i++) {
        idx[order[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i], word2 = words[i + 1];
        if (word1 != word2) {
            let less = false;
            let n = Math.min(word1.length, word2.length);
            for (let j = 0; j < n; j++) {
                if (word1[j] != word2[j]) {
                    if (idx[word1[j].charCodeAt() - 'a'.charCodeAt()] > idx[word2[j].charCodeAt() - 'a'.charCodeAt()]) {
                        return false;
                    } else {
                        less = true;
                        break;
                    }
                }
            }
            if (word1.length > word2.length && !less) {
                return false;
            }
        }
    }
    return true;
};

let a = ["word","world","row"], b = "worldabcefghijkmnpqstuvxyz";
isAlienSorted(a, b);