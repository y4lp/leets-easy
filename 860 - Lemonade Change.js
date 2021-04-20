/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let tens = 0, fives = 0;
    for (let b of bills) {
        if (b == 5) fives++;
        else if (b == 10) {
            if (fives != 0) {
                fives--;
                tens++;
            }
            else return false;
        } else {
            if (tens != 0) {
                if (fives != 0) {
                    tens--;
                    fives--;
                } else return false;
            } else {
                if (fives >= 3) {
                    fives -= 3;
                } else return false;
            }
        }
    }
    return true;
};