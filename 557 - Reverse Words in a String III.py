class Solution:
    def reverseWords(self, s: str) -> str:
        t = s.split(' ')
        for i in range(len(t)):
            t[i] = t[i][::-1]
        return ' '.join(t)


s = Solution()
print(s.reverseWords("Let's take LeetCode contest"))
