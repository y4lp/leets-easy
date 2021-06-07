#include <cmath>

class Solution {
public:
    int bitwiseComplement(int n) {
        int res = 0;
        if (n == 0) return 1;
        int p = 0;
        while (n > 0) {
            if (n % 2 == 0) {
                res += pow(2, p);
            }
            n /= 2;
            p++;
        }
        return res;
        
    }
};