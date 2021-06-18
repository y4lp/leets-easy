class Solution {
    public int[] distributeCandies(int candies, int num_people) {
        int[] res = new int[num_people];
        int adder = 1;
        while (candies > 0) {
            candies -= adder;
            if (candies >= 0) {
                res[(adder - 1) % num_people] += adder;
            } else {
                candies += adder;
                res[(adder - 1) % num_people] += candies;
                candies = 0;
            }
            adder++;
        }
        return res;
    }
}   