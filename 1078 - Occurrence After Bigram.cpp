class Solution {
public:
    vector<string> findOcurrences(string text, string first, string second) {
        vector<string> res;
        string a, b, word;
        text += ' ';
        for (char c : text) {
            if (c == ' ') {
                if (a == first && b == second) {
                    res.push_back(word);
                }
                a = b;
                b = word;
                word = "";
            } else {
                word += c;
            }
        }
        return res;
    }
};