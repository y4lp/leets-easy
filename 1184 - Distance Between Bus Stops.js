/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    let pa = 0, pb = 0;
    let a = Math.min(start, destination);
    let b = Math.max(start, destination);

    for (let i = a; i < b; i++) {
        pa += distance[i];

    }
    for (let i of distance) {
        pb += i;
    }
    pb -= pa;
    return Math.min(pa, pb);
};