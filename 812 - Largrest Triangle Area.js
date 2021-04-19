/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let area = 0.0, res = 0.0;
    for (let p1 of points) {
        for (let p2 of points) {
            for (let p3 of points) {
                if (p1 != p2 && p1 != p3) {
                    area = Math.abs(p1[0] * p2[1] + p2[0] * p3[1] +
                        p3[0] * p1[1] - p2[0] * p1[1] - p3[0] * p2[1] - 
                        p1[0] * p3[1]);
                    res = res > area ? res : area;
                }
            }
        }
    }
    return res / 2;
};