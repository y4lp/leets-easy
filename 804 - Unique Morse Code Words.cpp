#include <unordered_set>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    int uniqueMorseRepresentations(vector<string>& words) {
        unordered_set<string> s;
        string code[]{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        for (string word : words) {
            string trans = "";
            for (char c : word) {
                trans += code[c - 97];
            }
            s.insert(trans);
        }
        return s.size();
    }
};