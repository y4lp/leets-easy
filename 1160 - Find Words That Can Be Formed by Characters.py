from typing import Counter


class Solution:
    def countCharacters(self, words: list[str], chars: str) -> int:
        d = dict(Counter(chars))
        res = 0
        for word in words:
            temp = dict(Counter(word))
            good = True
            for k in temp.keys():
                if k not in d:
                    good = False
                    break
                elif d[k] < temp[k]:
                    good = False
                    break
                else:
                    continue
            if good:
                res += len(word)
        return res
