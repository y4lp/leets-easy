class Solution {
    public boolean checkPerfectNumber(int num) {
        int sum = 0;
        int[] x;
        for (int i = 1; i * i <= num; i++) {
            x = divmod(num, i);
            if (x[1] == 0) {
                sum += i;
                if (i != x[0]) {
                    sum += x[0];
                }
            }
        }
        sum -= num;
        return sum == num;
    }
    public int[] divmod(int n, int d) {
        return new int[] {(n / d), (n % d)};
    }
}