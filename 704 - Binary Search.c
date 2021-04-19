int search(int *nums, int numsSize, int target)
{
    int i = 0, j = numsSize - 1, res = -1, mid;
    while (i <= j) {
        mid = (i + j) / 2;
        if (target > nums[mid]) {
            i = mid + 1;
        } else if (target < nums[mid]) {
            j = mid - 1;
        } else {
            return mid;
        }
    }
    return res;
}