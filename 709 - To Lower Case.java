class Solution {
    public String toLowerCase(String str) {
        char[] c = str.toCharArray();
        for (int i = 0; i < c.length; i++) {
            if (Character.isUpperCase(c[i])) {
                c[i] = Character.toLowerCase(c[i]);
            }
        }
        String res = new String(c);
        return res;
    }
}