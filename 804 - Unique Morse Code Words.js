/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let code = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let s = new Set();
    for (let word of words) {
        let trans = '';
        for (let c of word) {
            trans += code[c.charCodeAt() - 97];
        }
        // console.log(trans);
        s.add(trans);
    }
    // for (let t of s) {
    //     console.log(t);
    // }
    return s.size;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);