class Solution {
    public String reverseWords(String s) {
        char[] c = s.toCharArray();
        String[] t = s.split(" ");
        int count = 0;
        for(String i : t){
            c = i.toCharArray();
            reverse(c);
            t[count++] = new String(c);
        }
        String res = String.join(" ", t);
        return res;
    }
    public void reverse(char[] c){
        int i = 0, j = c.length - 1;
        char t;
        for(;i < j; i++, j--) {
            t = c[i];
            c[i] = c[j];
            c[j] = t;
        }
    }
}