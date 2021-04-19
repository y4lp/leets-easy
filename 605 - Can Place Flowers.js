/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let res = 0, count0 = 0;
    let firstone = false;
    for (let i of flowerbed) {
        if (i == 0) {
            count0++;
        } else {
            if (firstone && count0 >= 3) {
                res += 1 + Math.floor((count0 - 3) / 2);
            }
            if (!firstone) {
                if (count0 >= 2) {
                    res += Math.floor(count0 / 2);
                }
                firstone = true;
            }
            count0 = 0;
        }
    }
    if (count0 == flowerbed.length) {
        res += 1 + Math.floor((count0 - 1) / 2);
    } else if (count0 >= 2) {
        res += Math.floor(count0 / 2);
    }
    return res >= n;
};