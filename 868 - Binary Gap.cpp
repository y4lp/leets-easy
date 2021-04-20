class Solution {
public:
    int binaryGap(int n) {
        int left = -1, right = -1, gap = 0, i = 0;
        while (n > 0) {
            if (n % 2 == 1) {
                if (right == -1) {
                    right = i;
                } else {
                    left = i;
                    gap = gap > (left - right) ? gap : left - right;
                    right = left;
                }
            }
            i++;
            n /= 2;
        }
        return gap;
    }
};