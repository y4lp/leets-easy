/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let res = address.replace(/\./g, '[.]');
    return res;
};