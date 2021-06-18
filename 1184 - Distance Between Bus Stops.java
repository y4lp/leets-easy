class Solution {
    public int distanceBetweenBusStops(int[] distance, int start, int destination) {
        int pa = 0, pb = 0;
        int a = Math.min(start, destination);
        int b = Math.max(start, destination);
        for (int i = a; i < b; i++) {
            pa += distance[i];
        }

        for (int i = b; i != a; i = (i + 1) % distance.length) {
            pb += distance[i];
        }

        return Math.min(pa, pb);
    }
}