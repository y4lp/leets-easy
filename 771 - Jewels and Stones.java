import java.util.HashSet;
import java.util.Set;

class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int s = 0;
        Set<Character> jew = new HashSet<>();
        for (char c: jewels.toCharArray()) {
            jew.add(c);
        }
        for (char c: stones.toCharArray()) {
            if (jew.contains(c)) {
                s++;
            }
        }
        return s;
    }
}