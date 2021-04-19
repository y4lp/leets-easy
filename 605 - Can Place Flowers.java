class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int res = 0, count0 = 0;
        boolean firstone = false;
        for (int i : flowerbed) {
            if (i == 0) {
                count0 ++;
            } else {
                if (firstone && count0 >= 3) {
                    res += 1 + (count0 - 3) / 2;
                }
                if (!firstone) {
                    if (count0 >= 2) {
                        res += count0 / 2;
                    }
                    firstone = true;
                }
                count0 = 0;
            }
        }
        if (count0 == flowerbed.length) {
            res += 1 + (count0 - 1) / 2;
        } else {
            res += count0 / 2;
        }
        return res >= n;
    }
}