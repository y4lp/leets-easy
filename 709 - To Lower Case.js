/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let a = str.split('');
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 'Z' && a[i] >= 'A') {
            a[i] = String.fromCharCode(a[i].charCodeAt(0) + 32);
        }
    }
    return a.join('');
};


// let a = 'asdsa';
// console.log(a);
// let b = a.split('');
// b[2] = 'f';
// b = b.join('')
// console.log(b);

let a = 'a';

console.log(a <= "z");
// console.log(new String(a));