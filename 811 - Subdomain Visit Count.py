class Solution:
    def subdomainVisits(self, cpdomains: list[str]) -> list[str]:
        counts = dict()
        for c in cpdomains:
            c = c.split()
            allc = int(c[0])
            counts[c[1]] = counts.setdefault(c[1], 0) + allc
            c[1] = c[1].split('.')
            comb = [c[1][i:] for i in range(-(len(c[1]) - 1), 0)]
            for item in comb:
                item = '.'.join(item)
                counts[item] = counts.setdefault(item, 0) + allc
        res = []
        for i in counts.items():
            temp = ''
            temp += str(i[1])
            temp += ' '
            temp += i[0]
            res.append(temp)
        return res


s = Solution()
a = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
print(s.subdomainVisits(a))
