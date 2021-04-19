/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let count = 0;
    let patt = /^[a-z]+$|^[A-Z]+$|^[A-Z][a-z]*$/
    return patt.test(word);
};
let t = ['YUS', 'abc', 'aBc', 'AbC', 'nmsl', 'ok'];
for (let i of t){
    console.log(i +' : '+detectCapitalUse(i));
}