class Solution {
    public String reverseStr(String s, int k) {
        char[] c = s.toCharArray();
        int j = 0;
        for (int start = 0; start < s.length(); start += k * 2) {
            j = start + k - 1;
            this.swap(c, start, j);
        }
        return new String(c);
    }
    public void swap(char[] a, int i, int j) {
        j = Math.min(j, a.length - 1);
        char t;
        while (i < j) {
            t = a[i];
            a[i++] = a[j];
            a[j--] = t;
        }

    }
}