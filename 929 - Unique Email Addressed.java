import java.util.HashSet;
import java.util.Set;

class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> s = new HashSet<>();
        for (String email : emails) {
            int at = email.indexOf("@");
            String local = email.substring(0, at), domain = email.substring(at);
            if (local.contains("+")) {
                local = local.substring(0, local.indexOf('+'));
            }
            local = local.replaceAll("\\.", "");
            s.add(local + domain);
        }
        return s.size();
    }
}