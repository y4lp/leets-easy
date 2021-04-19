import java.util.*;


class Solution {
    public List<String> subdomainVisits(String[] cpdomains) {
        Map<String, Integer> m = new HashMap<>();
        for (String domains : cpdomains) {
            String[] countdomain = domains.split("\\s+");
            int count = Integer.valueOf(countdomain[0]);
            m.put(countdomain[1], m.getOrDefault(countdomain[1], 0) + count);
            String[] domain = countdomain[1].split("\\.");
            String temp = "";
            for (int i = domain.length - 1; i > 0; i--) {
                temp = i == domain.length - 1 ? domain[i] : domain[i] + "." + temp;
                String joinedDomain = temp;
                m.put(joinedDomain, m.getOrDefault(joinedDomain, 0) + count);
            }
        }
        
        List<String> res = new ArrayList<>();
        int j = 0;
        for (Map.Entry<String, Integer> i : m.entrySet()) {
            res.add(String.valueOf(i.getValue()) + " " + i.getKey());
        }
        return res;
    }
}