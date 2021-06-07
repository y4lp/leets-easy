import java.util.Arrays;

class Solution {
    public String[] reorderLogFiles(String[] logs) {
        Arrays.sort(logs, (a, b) -> {
            String[] as = a.split(" ", 2), bs = b.split(" ", 2);
            boolean ad = Character.isDigit(as[1].charAt(0)), 
                    bd = Character.isDigit(bs[1].charAt(0));
            if (!ad && !bd) {
                int cmp = as[1].compareTo(bs[1]);
                if (cmp == 0) {
                    return as[0].compareTo(bs[0]);
                } else {
                    return cmp;
                }
            } else {
                return ad ? (bd ? 0 : 1) : -1;
            }
            
        });
        return logs;
    }
}