#include <string>
using namespace std;

class Solution {
public:
    bool buddyStrings(string a, string b) {
        if (a.size() != b.size()) return false;
        if (a == b) {
            int count[26]{0};
            for (char c : a) {
                int i = c - 97;
                count[i]++;
            }
            for (int i : count) {
                if (i > 1) {
                    return true;
                }
            }
            return false;
        } else {
            int first = -1, second = -1;
            for (int i = 0; i < a.size(); i++) {
                if (a[i] != b[i]) {
                    if (first == -1) {
                        first = i;
                    } else if (second == -1) {
                        second = i;
                    } else {
                        return false;
                    }
                }
            }
            bool res = first != -1 && second != -1;
            res = res && a[first] == b[second] && a[second] == b[first];
            return res;
        }
    }
};