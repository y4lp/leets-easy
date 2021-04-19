/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let temp = [...nums];
    temp.sort(cmp);
    let rank = 0;
    let medals = [ 0, 'Gold Medal', 'Silver Medal', 'Bronze Medal'];
    let res = [];
    for (let i of nums) {
        rank = temp.indexOf(i) + 1;
        if (rank <= 3) {
            res.push(medals[rank]);
            continue;
        }
        res.push(rank.toString());
    }
    return res;
};
function cmp(a, b) {
    return b - a;
}
console.log(findRelativeRanks([1,2,3,4,5]));