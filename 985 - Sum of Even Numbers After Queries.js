/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
    let evenIdx = new Set();
    let evenSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenSum += nums[i];
            evenIdx.add(i);
        }
    }
    let res = new Array(queries.length);
    for (let j = 0; j < queries.length; j++) {
        let i = queries[j][1], val = queries[j][0];
        if ((nums[i] + val) % 2 == 0) {
            evenSum += val;
            if (!evenIdx.has(i)) {
                evenSum += nums[i];
                evenIdx.add(i);
            }
        } else if (evenIdx.has(i)) {
            evenIdx.delete(i);
            evenSum -= nums[i];
        }
        nums[i] += val;
        res[j] = evenSum;
    }
    return res;
};


let a = [1,2,3,4];
let b = [[1,0],[-3,1],[-4,0],[2,3]];
sumEvenAfterQueries(a, b);