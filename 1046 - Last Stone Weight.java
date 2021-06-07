import java.util.PriorityQueue;

class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> q = new PriorityQueue<>((a, b) -> b - a);
        for (int s : stones) {
            q.offer(s);
        }
        while (q.size() > 1) {
            int a = q.poll();
            int b = q.poll();
            if (a > b) {
                q.offer(a - b);
            }
        }
        int res;
        if (q.size() == 0) res = 0;
        else res = q.poll();
        return res;
    }
}