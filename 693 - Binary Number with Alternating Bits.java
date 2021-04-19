class Solution {
    public boolean hasAlternatingBits(int n) {
        String bin = Integer.toBinaryString(n);
        int zeroes = 0, ones = 0;
        for (char i: bin.toCharArray()) {
            if (i == '0') {
                zeroes += 1;
                ones = 0;
            } else {
                ones += 1;
                zeroes = 0;
            }
            if ((ones + zeroes) >= 2) {
                return false;
            }
        }
        return true;
    }
}