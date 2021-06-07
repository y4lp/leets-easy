#include <cctype>

class Solution {
public:
    string reverseOnlyLetters(string S) {
        int len = S.size();
        int i = 0, j = len - 1;
        while (i < j) {
            if (i < len && !isalpha(S[i])) {
                i++;
            }
            if (j >= 0 && !isalpha(S[j])) {
                j--;
            }
            if (i < j && isalpha(S[i]) && isalpha(S[j])) {
                char t = S[i];
                S[i++] = S[j];
                S[j--] = t;
            }
        }
        return S;
    }
};