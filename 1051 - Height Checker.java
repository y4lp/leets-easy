class Solution {
    public int heightChecker(int[] heights) {
        int[] count = new int[101];
        int res = 0;
        for (int h : heights) {
            count[h]++;
        }
        for (int i = 1, j = 0; i < count.length; i++) {
            while (count[i]-- > 0) {
                if (heights[j++] != i)
                    res++;
            }
        }
        return res;
    }
}