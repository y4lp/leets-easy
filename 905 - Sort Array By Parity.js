/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let B = Array.from(A);
    let i = 0, j = B.length - 1;
    for (let a of A) {
        if (a % 2 == 0) {
            B[i++] = a;
        } else {
            B[j--] = a;
        }
    }
    return B;
};