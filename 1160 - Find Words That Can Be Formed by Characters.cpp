#include<unordered_map>
#include<string>
#include<vector>

using namespace std;

class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        unordered_map<char, int> count;
        for (char c : chars) {
            count[c]++;
        }
        int res = 0;
        for (string word : words) {
            unordered_map<char, int> t;
            for (char c : word) {
                t[c]++;
            }
            bool good = true;
            for (auto p = t.begin(); p != t.end(); p++) {
                if (count.find(p->first) == count.end()) {
                    good = false;
                    break;
                } else if (count[p->first] < p->second) {
                    good = false;
                    break;
                }
            }
            if (good) {
                res += word.size();
            }
        }
        return res;
    }
};