class Solution {
    public boolean rotateString(String A, String B) {
        if (A.length() != B.length()) return false;
        if (A.length() == 1) return A == B;
        return A.concat(A).contains(B);
    }
}