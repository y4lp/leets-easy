from typing import Deque


class Solution:
    def removeDuplicates(self, s: str) -> str:
        q = Deque()
        q.append(s[0])
        for c in s[1:]:
            if len(q) == 0 or q[-1] != c:
                q.append(c)
            else:
                q.pop()
        res = list(q)
        res = ''.join(res)
        return res