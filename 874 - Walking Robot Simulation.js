/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let x = 0, y = 0, res = 0, d = 0;
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let s = new Set(obstacles.map(x => x.toString()));
    for (let cmd of commands) {
        if (cmd == -2) {
            d = (d + 3) % 4;
        } else if (cmd == -1) {
            d = (d + 1) % 4;
        } else {
            for (let i = 0; i < cmd; i++) {
                let nx = x + dir[d][0];
                let ny = y + dir[d][1];
                let code = `${nx},${ny}`;
                if (!s.has(code)) {
                    x = nx;
                    y = ny;
                    let l = x * x + y * y;
                    res = res > l ? res : l;
                } else {
                    break;
                }
            }
        }
    }
    return res;
};