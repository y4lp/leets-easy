class Solution:
    def reorderLogFiles(self, logs: list[str]) -> list[str]:
        digit, word = [], []
        for log in logs:
            arr = log.split()
            if arr[1].isdigit():
                digit.append(log)
            else:
                word.append(arr)
        word = sorted(word, key= lambda a : (a[1:], a[0]))
        res = []
        for log in word:
            res.append(' '.join(log))
        res = res + digit
        return res

