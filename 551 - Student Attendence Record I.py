class Solution:
    def checkRecord(self, s: str) -> bool:
        absent_count = 0
        late_continuous = 0
        last = ''
        for char in s:
            if char == 'A':
                absent_count += 1
            if char == 'L':
                if last == 'L':
                    late_continuous += 1
                else:
                    late_continuous = 1
            if absent_count > 1 or late_continuous > 2:
                break
            last = char
        return absent_count <= 1 and late_continuous <= 2


s = Solution()
print(s.checkRecord("LLLALL"))
print(s.checkRecord('PPALL'))
