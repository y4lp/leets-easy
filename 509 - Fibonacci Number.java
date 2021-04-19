class Solution {
    public int fib(int n) {
        if (n == 1 || n == 0) {
            return n;
        }
        return this.fib(n - 1) + this.fib(n - 2);
    }
}