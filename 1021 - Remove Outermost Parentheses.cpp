class Solution {
public:
    string removeOuterParentheses(string s) {
        string res;
        int d = 0;
        for (char c : s) {
            if (c == ')') d--;
            if (d > 0) res += c;
            if (c == '(') d++;
        }
        return res;
    }
};