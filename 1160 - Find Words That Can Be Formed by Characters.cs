using System;
using System.Collections.Generic;

public class Solution
{
    public int CountCharacters(string[] words, string chars)
    {
        var map = new Dictionary<char, int>();
        foreach (char c in chars)
        {
            if (!map.ContainsKey(c))
            {
                map.Add(c, 1);
            }
            else
            {
                map[c]++;
            }
        }
        int res = 0;
        foreach (string word in words)
        {
            var t = new Dictionary<char, int>();
            foreach (char c in word)
            {
                if (!t.ContainsKey(c))
                {
                    t.Add(c, 1);
                }
                else
                {
                    t[c]++;
                }
            }
            bool good = true;
            foreach (var pair in t)
            {
                if (!map.ContainsKey(pair.Key))
                {
                    good = false;
                    break;
                }
                else if (map[pair.Key] < pair.Value)
                {
                    good = false;
                    break;
                }
            }
            if (good)
            {
                res += word.Length;
            }
        }
        return res;
    }
}