/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix[0].length; i++) {
        if (!checkDiag(matrix, 0, i)) {
            return false;
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        if (!checkDiag(matrix, i, 0)) {
            return false;
        }
    }
    return true;
};

function checkDiag(matrix, row, col) {
    let test = matrix[row][col];
    while (row + 1 < matrix.length && col + 1 < matrix[0].length) {
        row++;
        col++;
        if (test != matrix[row][col]) {
            return false;
        }
    }
    return true;
}