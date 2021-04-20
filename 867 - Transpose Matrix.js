/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let res = new Array(col);
    for (let i = 0; i < col; i++) {
        res[i] = new Array(row);
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            res[j][i] = matrix[i][j];
        }
    }
    return res;

};