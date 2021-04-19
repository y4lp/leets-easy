/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jew = new Set();
    let s = 0;
    for (let i of jewels) {
        jew.add(i);
    }
    for (let char of stones) {
        if (jew.has(char)) {
            s++;
        }
    }
    return s;
};