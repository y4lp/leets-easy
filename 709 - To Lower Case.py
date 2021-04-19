class Solution:
    def toLowerCase(self, str: str) -> str:
        t = [i for i in str]
        for i in range(len(str)):
            if 'A' <= t[i] <= 'Z':
                t[i] = chr(ord(t[i]) + 32)
        return ''.join(t)


s = Solution()
b = "asdosajoOIJSIOJDAHWJEIODSKL   OISDJIOJDSO isjdiojs SIOJODISJ asdajiosSDJIOJOIDS oaisjdoi"
a = s.toLowerCase(b)
print(a)
print(b)
