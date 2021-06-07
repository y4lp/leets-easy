class Solution {
    public boolean isMonotonic(int[] A) {
        boolean inc = false, dec = false, res = true;
        for (int i = 0; i < A.length - 1; i++) {
            if (A[i] < A[i + 1]) {
                inc = true;
            } else if (A[i] > A[i + 1]) {
                dec = true;
            }
            if (inc && dec) {
                res = false;
                break;
            }
        }
        return res;
    }
}