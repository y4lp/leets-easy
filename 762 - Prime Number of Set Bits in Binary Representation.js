/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    let res = 0;
    for (let i = L; i <= R; i++) {
        let bin = parseInt(i).toString(2);
        let count = 0;
        for (let bit of bin) {
            if (bit == '1') count++;
        }
        if (isprime(count)) res++;
    }
    return res;
};

function isprime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


for (let i = 0; i < 20; i++) {
    let a = console.log(i + ": " + isprime(i));
}

console.log(parseInt(23).toString(2));