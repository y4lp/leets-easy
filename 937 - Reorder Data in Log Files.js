/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    let digit = [], letter = [];
    let patt = /\d+/;
    for (let log of logs) {
        let arr = log.split(' ');
        if (patt.test(arr[1])) {
            digit.push(log)
        } else {
            letter.push(log)
        }
    }
    letter.sort();
    letter.sort((a, b) => a.slice(a.indexOf(' ')) < b.slice(b.indexOf(' ')) ? -1 : 1);
    return letter.concat(digit);
};