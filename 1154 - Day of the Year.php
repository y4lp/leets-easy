<?php

class Solution
{

    /**
     * @param String $date
     * @return Integer
     */
    function dayOfYear($date)
    {
        $mday = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        $y = intval(substr($date, 0, 4));
        $m = intval(substr($date, 5, 2));
        $d = intval(substr($date, 8, 2));
        $leap = $y % 400 == 0 || ($y % 4 == 0 && $y % 100 != 0);
        $res = 0;
        for ($i = 0; $i < $m; $i++) {
            if ($i == ($m - 1)) {
                $res += $d;
            } else if ($leap && $i == 1) {
                $res += 29;
            } else {
                $res += $mday[$i];
            }
        }
        return $res;
    }
}
