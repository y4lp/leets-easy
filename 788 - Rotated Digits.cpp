class Solution {
public:
    int rotatedDigits(int N) {
        int res = 0;
        for (int i = 1; i <= N; i++) {
            if (checkRotation(i)) {
                res++;
            }
        }
        return res;
    }

    bool checkRotation(int n) {
        bool flag = false;
        int digit;
        while (n > 0) {
            digit = n % 10;
            n /= 10;
            switch(digit) {
                case 3:
                case 4:
                case 7:
                    return false;
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
};