class Solution {
    public int countPrimeSetBits(int L, int R) {
        int res = 0;
        for(int i = L; i <= R; i++) {
            if (isprime(Integer.bitCount(i))) {
                res++;
            }
        }
        return res;
    }
    public boolean isprime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i < n / 2; i++){
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}