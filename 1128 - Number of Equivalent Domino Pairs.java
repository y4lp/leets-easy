class Solution {
    public int numEquivDominoPairs(int[][] dominoes) {
        int[] eq = new int[100];
        int res = 0;
        for (int[] d : dominoes) {
            int val = d[0] <= d[1] ? d[0] * 10 + d[1] : d[1] * 10 + d[0];
            res += eq[val];
            eq[val]++;
        }
        return res;
    }
}