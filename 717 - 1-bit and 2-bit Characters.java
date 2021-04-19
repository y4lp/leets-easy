class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        int parity = 0;
        if (bits.length == 1) {
            return true;
        }
        for (int i = bits.length - 2; i >= 0 && bits[i] == 1; i--) {
            parity = (parity + 1) % 2;
        }
        return parity == 0;
    }
}