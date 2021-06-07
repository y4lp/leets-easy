/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    let a = (points[1][1] - points[0][1]) * (points[2][0] - points[0][0]),
        b = (points[2][1] - points[0][1]) * (points[1][0] - points[0][0]);
    return a != b;
};