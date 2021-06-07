/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let count = new Map();
    for (let card of deck) {
        if (count.has(card)) {
            count.set(card, count.get(card) + 1);
        } else {
            count.set(card, 1);
        }
    }
    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    let g = 0;
    for (let co of count.values()) {
        g = gcd(co, g);
    }
    return g >= 2;
};