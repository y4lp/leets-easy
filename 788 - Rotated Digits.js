/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let res = 0;
    for (let i = 1; i <= N; i++) {
        if (checkRotation(i)) {
            res++;
        }
    }
    return res;
};

function checkRotation(n) {
    let flag = false, valid = true;
    while (n > 0 && valid) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        switch (digit) {
            case 4:
            case 7:
            case 3:
                valid = false;
                flag = false;
                break;
            case 2:
            case 5:
            case 6:
            case 9:
                flag = true;
                break;
        }
    }
    return flag;
}