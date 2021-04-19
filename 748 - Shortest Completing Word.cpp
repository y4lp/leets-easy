#include <iostream>
#include <map>
#include <vector>
#include <cctype>
using namespace std;

class Solution {
private:
    map<char, int> m;
public:
    string shortestCompletingWord(string licensePlate, vector<string>& words) {
        for (int i = 0; i < licensePlate.size(); i++) {
            if (isalpha(licensePlate[i])) {
                char c = tolower(licensePlate[i]);
                map<char, int>::iterator it = m.find(c);
                if (it == m.end()) {
                    m[c] = 1;
                }
                else {
                    m[c]++;
                }
            }
        }
        string res = "poajsdiaiojsdasduiohads";
        for (int i = 0; i < words.size(); i++) {
            if (check(words[i])) {
                res = res.size() > words[i].size() ? words[i] : res;
            }
        }
        return res;

    }

    bool check(const string& word) {
        for (auto it = m.begin(); it != m.end(); it++) {
            if (count(word, it->first) >= it->second) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }

    int count(const string& word, const char c) {
        int coun = 0;
        for (int i = 0; i < word.size(); i++) {
            if (word[i] == c) coun++;
        }
        return coun;
    }
};