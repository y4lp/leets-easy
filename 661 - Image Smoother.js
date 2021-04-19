/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let row = M.length;
    let col = M[0].length;
    let xj = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
    let yj = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    let res = Array.from(new Array(row), n => new Array(col));
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            //
            let g = 0;
            let c = 0;
            for (let k = 0; k < xj.length; k++) {
                let it = i + yj[k];
                let jt = j + xj[k];
                if (0 <= it && it < row && 0 <= jt && jt < col) {
                    g += M[it][jt];
                    c++;
                }
                res[i][j] = Math.floor(g / c);
            }
        }
    }
    return res;
};

let a = new Array(10);
let b = Array.from(new Array(10), n => new Array(10));
let c = 11;
console.log(10 < c < 3);
let d = imageSmoother([[1, 1, 1],
[1, 0, 1],
[1, 1, 1]]);
console.log(d);