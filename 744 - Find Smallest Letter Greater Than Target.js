/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let l = 0, r = letters.length - 1;
    let m;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (letters[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    if (l == letters.length) {
        return letters[0];
    } else {
        return letters[l];
    }
};