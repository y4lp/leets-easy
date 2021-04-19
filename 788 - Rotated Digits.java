class Solution {
    public int rotatedDigits(int N) {
        int res = 0;
        for (int i = 1; i <= N; i++) {
            if (checkRotation(i)) {
                res++;
            }
        }
        return res;
    }

    public boolean checkRotation(int n) {
        int t = n;
        boolean flag = false, valid = true;
        int digit;
        while (t > 0 && valid) {
            digit = t % 10;
            t /= 10;
            switch(digit) {
                case 3, 4, 7:
                    valid = false;
                    flag = false;
                    break;
                case 2, 5, 6, 9:
                    flag = true;
                    break;
            }
        }
        return flag;
    }
}