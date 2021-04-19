class Solution {
    public boolean checkRecord(String s) {
        int absentCount = 0, lateContinuous = 0;
        char[] str = s.toCharArray();
        char last = '\0';
        for (char c : str){
            if (c == 'A') {
                absentCount++;
            }
            if (c == 'L'){
                if (last == 'L') {
                    lateContinuous++;
                } else {
                    lateContinuous = 1;
                }
            }
            if (absentCount > 1 || lateContinuous > 2) {
                break;
            }
            last = c;
        }
        return absentCount <= 1 && lateContinuous <= 2;

    }
}