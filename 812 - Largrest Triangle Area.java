class Solution {
   public double largestTriangleArea(int[][] points) {
        double res = 0;
        double area = 0;
        for (int[] p1 : points) {
            for (int[] p2 : points) {
                for (int[] p3 : points) {
                    if (p1 != p2 && p1 != p3) {
                        area = Math.abs(p1[0] * p2[1] + p2[0] * p3[1] +
                        p3[0] * p1[1] - p2[0] * p1[1] - p3[0] * p2[1] - 
                        p1[0] * p3[1]);
                        res = res > area ? res : area;
                    }
                }
            }
        }
        return res / 2;
    }
}