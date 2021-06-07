class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        int[] idx = new int[26];
        for (int i = 0; i < 26; i++) {
            idx[order.charAt(i) - 'a'] = i;
        }
        for (int i = 0; i < words.length - 1; i++) {
            String word1 = words[i], word2 = words[i + 1];
            boolean less = false;
            if (!word1.equals(word2)) {
                int n = Math.min(word1.length(), word2.length());
                for (int j = 0; j < n; j++) {
                    if (word1.charAt(j) != word2.charAt(j)) {
                        if(idx[word1.charAt(j) - 'a'] > idx[word2.charAt(j) - 'a']) {
                            return false;
                        } else {
                            less = true;
                            break;
                        }
                    }
                }
                if (word1.length() > word2.length() && !less) {
                    return false;
                }
            }
        }
        return true;
    }
}