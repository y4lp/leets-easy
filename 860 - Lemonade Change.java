class Solution {
    public boolean lemonadeChange(int[] bills) {
        int fives = 0, tens = 0;
        for (int b : bills){
            if (b == 5) {
                fives++;
            } else if (b == 10) {
                if (fives != 0) {
                    fives--;
                    tens++;
                } else {
                    return false;
                }
            } else {
                if (tens != 0) {
                    if (fives != 0) {
                        fives--;
                        tens--;
                    } else {
                        return false;
                    }
                } else {
                    if (fives >= 3) {
                        fives -= 3;
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}