class Solution:
    def convertToBase7(self, num: int) -> str:
        subzero = False
        if num < 0:
            num = -num
            subzero = True
        a, b = divmod(num, 7)
        num = a
        res = []
        res[0:0] = [str(b)]
        while a >= 7:
            a, b = divmod(num, 7)
            num = a
            res[0:0] = [str(b)]
        if a:
            res[0:0] = [str(a)]
        if subzero:
            res[0:0] = ['-']
        return ''.join(res)
s = Solution()
print(s.convertToBase7(0))
