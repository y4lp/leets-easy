#include <vector>
#include <string>
#include <algorithm>
#include <utility>
#include <map>
using namespace std;


class Solution {
public:
    vector<string> subdomainVisits(vector<string>& cpdomains) {
        unordered_map<string, int> m;
        for (string & s : cpdomains) {
            int spaceidx = s.find(' ');
            int count = stoi(s.substr(0, spaceidx));
            string subdomains = s.substr(spaceidx + 1);
            m[subdomains] += count;
            int period = subdomains.size();
            string temp = "";
            do {
                period = subdomains.rfind('.', period - 1);
                if (period != string::npos) {
                    temp = subdomains.substr(period + 1);
                    m[temp] += count;
                }
            } while (period != string::npos);
        }
        vector<string> res;
        for (auto item : m) {
            string t = to_string(item.second) + " " + item.first;
            res.push_back(t);
        }
        return res;
    }
};