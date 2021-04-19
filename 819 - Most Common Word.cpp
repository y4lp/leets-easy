#include <iostream>
#include <vector>
#include <set>
#include <utility>
#include <string>
#include <unordered_set>
#include <unordered_map>
#include <cctype>

using namespace std;

class Solution {
public:
    string mostCommonWord(string paragraph, vector<string>& banned) {
        paragraph += ".";
        unordered_set<string> banset;
        for (auto s : banned) {
            banset.insert(s);
        }

        unordered_map<string, int> m;
        string temp = "";
        for (char c : paragraph) {
            if (isalpha(c)) {
                temp += tolower(c);
            } else if (temp.size() > 0) {
                if (banset.find(temp) == banset.end()) {
                    m[temp] += 1;
                }
                temp = "";
            }
        }
        int max = 0;
        string res = "";
        for (auto p = m.begin(); p != m.end(); p++) {
            if (max < p->second) {
                max = p->second;
                res = p->first;
            }
        }
        return res;

    }
};