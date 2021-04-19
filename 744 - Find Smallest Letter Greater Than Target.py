class Solution:
    def nextGreatestLetter(self, letters: list[str], target: str) -> str:
        i = self.find(letters, target)
        return i
    def find(self, letters, target):
        l = 0
        r = len(letters) - 1
        # found = False
        while l <= r:
            m = (l + r) // 2
            if letters[m] > target:
                r = m - 1
            else:
                l = m + 1
        if l == len(letters):
            return letters[0]
        else:
            return letters[l]

