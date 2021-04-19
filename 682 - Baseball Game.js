/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let res = [];
    let i = 0;
    for (let op of ops) {
        if (op.startsWith('-') || isNaN(op) == false) {
            res[i] = Number.parseInt(op);
        }
        if (op == "D") {
            res[i] = res[i - 1] * 2;
        }
        if (op == "+") {
            res[i] = res[i - 1] + res[i - 2];
        }
        if (op == "C") {
            res[--i] = 0;
            i--;
        }
        i++;
        console.log(res);
    }
    let sum = 0;
    for (let i of res) {
        sum += i;
    }
    return sum;
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));