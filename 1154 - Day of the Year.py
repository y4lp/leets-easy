import time

class Solution:
    def dayOfYear(self, date: str) -> int:
        res = time.strptime(date, "%Y-%m-%d")
        return res.tm_yday
