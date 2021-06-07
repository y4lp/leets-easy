#include <unordered_map>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        unordered_map<char, int> count;
        for (char c : words[0]) {
            count[c]++;
        }
        for (int i = 1; i < words.size(); i++) {
            for (auto p = count.begin(); p != count.end(); p++) {
                int cnt = countc(words[i], p->first);
                count[p->first] = count[p->first] < cnt ? count[p->first] : cnt;
            }
        }
        vector<string> res;
        for (auto p = count.begin(); p != count.end(); p++) {
            for (int i = 0; i < p->second; i++) {
                res.push_back(string{p->first});
            }
        }
        return res;

    }

    int countc(string word, char c) {
        int res = 0;
        for (char a : word) {
            if (a == c) res++;
        }
        return res;
    }
};