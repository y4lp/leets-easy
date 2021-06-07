#include <unordered_set>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        unordered_set<string> s;
        for (string email : emails) {
            int at = email.find('@');
            string local = email.substr(0, at), domain = email.substr(at);
            string newlocal = "";
            for (char c : local) {
                if (c == '+') {
                    break;
                } else if (c == '.') {
                    continue;
                } else {
                    newlocal += c;
                }
            }
            string res = newlocal + domain;
            s.insert(res);
        }
        return s.size();
    }
};