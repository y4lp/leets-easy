class Solution:
    def calPoints(self, ops: list[str]) -> int:
        res = []
        for op in ops:
            if op[-1].isdigit():
                res.append(int(op))
            if op == 'D':
                res.append(res[-1] * 2)
            if op == '+':
                res.append(res[-1] + res[-2])
            if op == 'C':
                res.pop()
            print(res)
        return sum(res)


s = Solution()
s.calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])
