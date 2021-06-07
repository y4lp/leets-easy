class Solution:
    def bitwiseComplement(self, n: int) -> int:
        b = bin(n)
        b = b[2:]
        b = [c for c in b]
        for i in range(len(b)):
            if b[i] == '0':
                b[i] = '1'
            else:
                b[i] = '0'
        b = '0b' + ''.join(b)
        res = int(b, base=0)
        return res