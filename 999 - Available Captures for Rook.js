/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let d = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let res = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == 'R') {
                for (let k = 0; k < 4; k++) {
                    let ni = i + d[k][1], nj = j + d[k][0];
                    while (ni >= 0 && ni < 8 && nj >= 0 && nj < 8) {
                        if (board[ni][nj] == 'B') {
                            break;
                        } else if (board[ni][nj] == 'p') {
                            res++;
                            break;
                        } else {
                            ni += d[k][1];
                            nj += d[k][0];
                        }
                    }
                }
            }
        }
    }
    return res;
};