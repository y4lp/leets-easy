/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let absentCount = 0, lateContinuous = 0, last = '';
    for (let c of s) {
        if (c == 'A') {
            absentCount++;
        }
        if (c == 'L') {
            if (last == 'L') {
                lateContinuous++;
            } else {
                lateContinuous = 1;
            }
        }
        if (lateContinuous > 2 || absentCount > 1) {
            break;
        }
        last = c;
    }
    return lateContinuous <= 2 && absentCount <= 1;
};

console.log(checkRecord('LLAL'));