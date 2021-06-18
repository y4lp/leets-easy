/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let res = Array(num_people).fill(0), adder = 1;
    while (candies > 0) {
        candies -= adder;
        if (candies >= 0) {
            res[(adder - 1) % num_people] += adder;
        } else {
            candies += adder;
            res[(adder - 1) % num_people] += candies;
            candies = 0;
        }
        adder++;
    }
    return res;
};