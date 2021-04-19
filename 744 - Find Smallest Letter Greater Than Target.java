class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        int l = 0, r = letters.length - 1;
        int m;
        while (l <= r) {
            m = (l + r) / 2;
            if (letters[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        if (l == letters.length) {
            return letters[0];
        } else {
            return letters[l];
        }

    }
}