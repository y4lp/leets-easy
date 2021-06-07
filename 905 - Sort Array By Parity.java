class Solution {
    public int[] sortArrayByParity(int[] A) {
        int[] B = new int[A.length];
        int i = 0, j = B.length - 1;
        for (int a : A) {
            if (a % 2 == 0) {
                B[i++] = a;
            } else {
                B[j--] = a;
            }
        }
        return B;

    }
}