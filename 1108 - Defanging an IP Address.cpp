#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    string defangIPaddr(string address) {
        string res;
        for (char c : address) {
            if (c == '.') {
                res += "[.]";
            } else {
                res += c;
            }
        }
        return res;
    }
};