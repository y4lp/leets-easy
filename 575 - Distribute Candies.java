import java.util.HashSet;

class Solution {
    public int distributeCandies(int[] candyType) {
        HashSet<Integer> s = new HashSet<>();
        for (int i: candyType) {
            s.add(i);
        }
        int n = candyType.length / 2;
        int l = s.size();
        return l < n ? l : n;
    }
}