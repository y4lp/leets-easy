import math

class Solution:

    def gcdOfStrings(self, str1: str, str2: str) -> str:
        g = math.gcd(len(str1), len(str2))
        res = str1[: g]
        if str1 + str2 == str2 + str1:
            return res
        else:
            return ''