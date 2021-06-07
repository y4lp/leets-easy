import re


class Solution:
    def numUniqueEmails(self, emails: "list[str]") -> int:
        e = set()
        for email in emails:
            at = email.find('@')
            local = email[:at]
            domain = email[at:]
            local = re.sub(r'\.', '', local)
            local = re.sub(r'\+.*', '', local)
            # print(local + domain)
            e.add(local + domain)
        return len(e)


s = Solution()
a = ["test.email+alex@leetcode.com",
     "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
s.numUniqueEmails(a)
