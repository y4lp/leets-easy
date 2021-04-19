class Solution {
public:
    int countPrimeSetBits(int L, int R) {
        int res = 0;
        for (int i = L; i <= R; ++i) {
            if (isprime(bitcount(i))) {
                res++;
            }
        }
        return res;
    }
    int bitcount(int n) {
        int c = 0;
        while(n) {
            n = n & (n - 1);
            c++;
        }
        return c;
    }
    bool isprime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i < n / 2 + 1; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
};