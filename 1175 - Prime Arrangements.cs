public class Solution
{
    private const int m = 1000000000 + 7;
    public int NumPrimeArrangements(int n)
    {
        if (n == 1) return 1;
        int primeCount = 0;
        for (int i = 2; i <= n; i++)
        {
            if (isPrime(i))
                primeCount++;
        }

        long res = (fac(primeCount) * fac(n - primeCount));
        return (int)(res % m);
    }

    private long fac(int n)
    {
        long res = 1;
        for (int i = 2; i <= n; i++)
        {
            res *= i;
            res %= m;
        }
        return res;
    }
    private bool isPrime(int n)
    {
        for (int i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
                return false;
        }
        return true;
    }
}