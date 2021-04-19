class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1, mid, res = -1; 
        while (l <= r) {
            mid = (l + r) / 2;
            if (nums[mid] < target) {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                return mid;
            }
        }
        return res;
    }
}