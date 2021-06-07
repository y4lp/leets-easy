#include <string>
#include <vector>
#include <algorithm>
#include <cctype>

using namespace std;

bool compare_log(const string & a, const string & b) {
    string as[2], bs[2];
    as[0] = a.substr(0, a.find(' '));
    as[1] = a.substr(a.find(' '));
    bs[0] = b.substr(0, b.find(' '));
    bs[1] = b.substr(b.find(' '));
    bool ad = isdigit(as[1][1]), 
        bd = isdigit(bs[1][1]);
    if (!ad && !bd) {
        if (as[1] != bs[1]) {
            return as[1] < bs[1];
        } else {
            return as[0] < bs[0];
        }
    } else {
        return ad ? false : true;
    }
}

class Solution {
public:
    vector<string> reorderLogFiles(vector<string>& logs) {
        stable_sort(logs.begin(), logs.end(), compare_log);
        return logs;
    }
};