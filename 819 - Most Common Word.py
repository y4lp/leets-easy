class Solution:
    def mostCommonWord(self, paragraph: str, banned: "list[str]") -> str:
        words = []
        m = dict()
        symbol = ' !?\',;.'
        temp = ''
        for c in paragraph:
            if c in symbol:
                words.append(temp)
                temp = ''
            else:
                temp += c
        print(words)
        if len(temp) > 0:
            words.append(temp)
        for word in words:
            if len(word) > 0:
                word = word.lower()
                m[word] = m.setdefault(word, 0) + 1
        maxcount = 0
        res = ''
        for word, count in m.items():
            if word not in banned and maxcount < count:
                maxcount = count
                res = word
            print(word, count)
        return res


s = Solution()
test1 = ("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])
a = s.mostCommonWord("BOB", [])
print(a)
