from typing import Counter


class Solution:
    def hasGroupsSizeX(self, deck: list[int]) -> bool:
        count = Counter(deck)
        mincount = 9999
        for c in count.values():
            if mincount > c:
                mincount = c
        if mincount >= 2:
            for div in range(2, mincount + 1):
                res = True
                for c in count.values():
                    if c % div == 0:
                        continue
                    else:
                        res = False
                if res:
                    break
        else:
            res = False
        return res