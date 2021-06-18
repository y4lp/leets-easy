/**
 * @param {number} n
 * @return {number}
 */
let MOD = 10**9 + 7;
var numPrimeArrangements = function (n) {
    if (n == 1) return 1;
    let pCount = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) pCount++;
    }
    return multi(fac(pCount), fac(n - pCount));
};
function multi(a,b){
    //将b拆成2部分
    let t=Math.floor(b/100000),
        t2=b % 100000
    let sum=0
    for(let i=0;i<t;i++){
      sum=(sum+100000*a) % MOD
    }
    sum=(sum+t2*a)%MOD
    return sum
}

function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function fac(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
        res %= MOD;
    }
    return res;
}