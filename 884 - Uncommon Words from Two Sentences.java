import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.graalvm.compiler.replacements.nodes.ReadRegisterNode;

class Solution {
    public String[] uncommonFromSentences(String A, String B) {
        Map<String, Integer> count = new HashMap<>();
        for (String word : A.split(" ")) {
            count.put(word, count.getOrDefault(word, 0) + 1);
        }
        for (String word : B.split(" ")) {
            count.put(word, count.getOrDefault(word, 0) + 1);
        }
        List<String> res = new ArrayList<>();
        for (Entry<String, Integer> e : count.entrySet()) {
            if (e.getValue() == 1) {
                res.add(e.getKey());
            }
        }
        return res.toArray(new String[res.size()]);
    }
}