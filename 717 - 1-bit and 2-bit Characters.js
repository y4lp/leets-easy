/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let parity = 0;
    if (bits.length == 1) {
        return true;
    }
    for (let i = bits.length - 2; i >= 0 && bits[i] == 1; i--) {
        parity = parity + 1;
    }
    return parity % 2 == 0;
};