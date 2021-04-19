import java.util.HashSet;
import java.util.Set;

class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        String[] code = new String[] {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        Set<String> s = new HashSet<>();
        for (String word: words) {
            String trans = "";
            for (char i : word.toCharArray()) {
                trans += code[i - 97];
                // Character.code
            }
            s.add(trans);
        }
        return s.size();
    }
}