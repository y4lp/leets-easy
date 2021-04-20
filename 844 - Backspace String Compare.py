class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def getFixed(s):
            ret = []
            for c in s:
                if c == '#':
                    if len(ret) > 0:
                        ret.pop()
                else:
                    ret.append(c)
            return ''.join(ret)
        
        return getFixed(s) == getFixed(t)