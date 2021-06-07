#include <vector>
#include <string>
#include <unordered_map>


using namespace std;
class Solution {
public:
    vector<string> uncommonFromSentences(string A, string B) {
        A = A + ' ' + B + ' ';
        unordered_map<string, int> count;
        string word;
        for (char c : A) {
            if (c == ' ' && word.size() != 0) {
                count[word] += 1;
                word = "";
            } else {
                word += c;
            }
        }
        vector<string> res;
        for (auto i = count.begin(); i != count.end(); i++) {
            if (i->second == 1) {
                res.push_back(i->first);
            }
        }
        return res;
    }
};