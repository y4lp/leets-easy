/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let s = new Set(candyType);
    let n = candyType.length / 2;
    let l = s.size;
    return l < n ? l : n;
};

a = 'nasdmals';
Number.parseInt