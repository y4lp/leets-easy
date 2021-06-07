class Solution {
    public int minDeletionSize(String[] strs) {
        String[] res = new String[strs[0].length()];
        int count = 0;
        for (int i = 0; i < res.length; i++) {
            res[i] = "";
            for (int j = 0; j < strs.length - 1; j++) {
                if (strs[j].charAt(i) > strs[j + 1].charAt(i)) {
                    count++;
                    break;
                }
            }
        }
        return count;
    }
}