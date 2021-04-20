#include <vector>
#include <string>
using namespace std;
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        return getDele(s) == getDele(t);
    }
    string getDele(const string & s) {
        string ret = "";
        for (char c : s) {
            if (c != '#') {
                ret += c;
            } else {
                if (ret.size() > 0) {
                    ret.erase(ret.end() - 1);
                }
            }
        }
        return ret;
    }
};