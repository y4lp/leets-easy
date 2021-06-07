class Solution:
    def isAlienSorted(self, words: list[str], order: str) -> bool:
        idx = {c : i for i, c in enumerate(order)}

        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i + 1]
            less = False
            for j in range(min(len(word1), len(word2))):
                if word1[j] != word2[j]:
                    if idx[word1[j]] > idx[word2[j]]:
                        return False
                    else:
                        less = True
                        break
            if len(word1) > len(word2) and not less:
                return False

        return True
