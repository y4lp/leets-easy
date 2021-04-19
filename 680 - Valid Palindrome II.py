class Solution:
    def validPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s) - 1
        while l < r:
            if s[l] != s[r]:
                break
            else:
                l += 1
                r -= 1
        return self.isPalindrome(s[l:r]) or self.isPalindrome(s[l+1:r+1])

    def isPalindrome(self, s):
        return s == s[::-1]


s = Solution()
print(s.validPalindrome("abcad"))
