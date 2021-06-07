class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        int idx[26];
        for (int i = 0; i < 26; i++) {
            idx[order[i] - 'a'] = i;
        }
        for (int i = 0; i < words.size() - 1; i++) {
            string a = words[i], b = words[i + 1];
            if (a != b) {
                int n = min(a.size(), b.size());
                bool less = false;
                for (int j = 0; j < n; j++) {
                    if (a[j] != b[j]) {
                        if (idx[a[j] - 'a'] > idx[b[j] - 'a']) {
                            return false;
                        } else {
                            less = true;
                            break;
                        }
                    }
                }
                if (a.size() > b.size() && !less) {
                    return false;
                }
            }
        }
        return true;
    }
};