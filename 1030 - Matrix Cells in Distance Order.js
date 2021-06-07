/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    let res = new Array(rows * cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            res[i * cols + j] = [i, j];
        }
    }
    res.sort((a, b) => {
        let ad = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter);
        let bd = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter);
        return ad - bd;
    });
    return res;
};