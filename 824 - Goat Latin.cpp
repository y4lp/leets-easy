#include <iostream>
#include <string>
#include <unordered_set>
#include <cctype>
using namespace std;

class Solution {
public:
    string toGoatLatin(string S) {
        string ap = "a";
        unordered_set<char> vowel;
        string v = "AEIOUaeiou";
        for (char c : v) {
            vowel.insert(c);
        }
        S += ' ';
        string res = "";
        string temp = "";
        char last = ' ';
        for (char c : S) {
            if (c != ' ') {
                temp += c;
            } else if (temp.size() > 0) {
                char fst = temp[0];
                if (vowel.find(fst) != vowel.end()) {
                    res += temp;
                } else {
                    res += temp.substr(1, temp.size() - 1);
                    res += fst;
                }
                res += "ma";
                res += ap;
                res += ' ';
                ap += 'a';
                temp = "";
            }
        }
        return res.substr(0, res.size() - 1);
    }
};