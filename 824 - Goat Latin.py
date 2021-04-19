class Solution:
    def toGoatLatin(self, S: str) -> str:
        words = S.split(' ')
        vowel = 'aeiouAEIOU'
        ap = 'a'
        for i in range(len(words)):
            if words[i][0] in vowel:
                words[i] += 'ma'
            else:
                words[i] = words[i][1:] + words[i][0] + 'ma'
            words[i] += ap
            ap += 'a'
        res = ' '.join(words)
        return res


s = Solution()
a = s.toGoatLatin("I speak Goat Latin")
print(a)
