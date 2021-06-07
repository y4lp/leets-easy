class Solution {
    public boolean canThreePartsEqualSum(int[] arr) {
        int sum = 0;
        for (int a : arr) {
            sum += a;
        }
        if (sum % 3 != 0) return false;
        int ps = sum / 3;
        boolean p1 = false, p2 = false;
        sum = 0;
        int i = 0;
        for (; i < arr.length; i++) {
            sum += arr[i];
            if (sum == ps) {
                sum = 0;
                if (!p1) p1 = true;
                else if (!p2) {
                    p2 = true;
                    break;
                }
            }
        }
        return p1 && p2 && i != arr.length - 1;
    }
}