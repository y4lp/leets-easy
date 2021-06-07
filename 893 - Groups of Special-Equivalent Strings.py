class Solution:
    def numSpecialEquivGroups(self, A: list[str]) -> int:
        s = set()
        for string in A:
            even = sorted(string[::2])
            odd = sorted(string[1::2])
            s.add(''.join(even + odd))
        return len(s)
