/**
 * @param {number} n
 * @return {boolean}
 */
let hasAlternatingBits = function (n) {
    let num = n ^ (n >> 1);
    return (num & (num + 1)) == 0;
};

console.log(hasAlternatingBits(5));