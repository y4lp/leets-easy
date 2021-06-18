import java.util.ArrayDeque;
import java.util.Queue;

class Solution {
    public void duplicateZeros(int[] arr) {
        Queue<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                q.add(0);
                q.add(0);
            } else {
                q.add(arr[i]);
            }
            arr[i] = q.poll();
        }
    }
}