import java.util.*;

class Solution {
    public String[] findRelativeRanks(int[] nums) {
        ArrayList<Integer> temp = new ArrayList<>();
        for (int i: nums) {
            temp.add(i);
        }
        temp.sort(Collections.reverseOrder());
        String[] order = new String[nums.length];
        int rank = 0;
        String[] medals = {"0", "Gold Medal", "Silver Medal", "Bronze Medal"};
        int j = 0;
        for (int i: nums) {
            rank = temp.indexOf(i) + 1;
            if (rank <= 3) {
                order[j++] = medals[rank];
                continue;
            }
            order[j++] = Integer.toString(rank);
        }
        return order;
    }
}
class Mycomparator implements Comparator<Integer> {
    @Override
    public int compare(Integer a, Integer b) {
        return a > b ? -1 : 1;
    }
}