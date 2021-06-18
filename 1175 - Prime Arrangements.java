import java.io.Console;

class Solution {
    public int numPrimeArrangements(int n) {
        int primeCount = 0, m = 1000000000 + 7;
        if (n == 1)
            return 1;
        for (int i = 2; i <= n; i++) {
            if (isPrime(i))
                primeCount++;
        }

        long res = (fac(primeCount) * fac(n - primeCount));
        return (int)(res % m);

    }

    private long fac(int n) {
        long res = 1;
        for (int i = 1; i <= n; i++) {
            res *= i;
            res %= 1000000007;
        }
        return res;
    }

    private boolean isPrime(int n) {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }
}