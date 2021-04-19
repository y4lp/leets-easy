class Solution:
    def uniqueMorseRepresentations(self, words: list[str]) -> int:
        code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        s = set()
        for word in words:
            trans = ''
            for c in word:
                index = ord(c) - 97
                trans += code[index]
            print(trans)
            s.add(trans)
        return len(s)


s = Solution()
s.uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])