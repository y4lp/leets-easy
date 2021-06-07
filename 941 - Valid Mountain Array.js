/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let sinc = false, sdec = false;
    let n = arr.length;
    if (n < 3) return false;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            if (!sinc && !sdec) {
                sinc = true;
            } else if (sinc && sdec) {
                return false;
            }
        } else if (arr[i] < arr[i - 1]) {
            if (sinc && !sdec) {
                sdec = true;
            } else if (sinc && sdec) {
                continue;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return sinc && sdec;
};