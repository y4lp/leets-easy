<?php

class Solution {

/**
* @param Integer $n
* @return Integer
*/
function tribonacci($n) {
    if ($n == 0) {
        return 0;
    } else if ($n <= 2) {
        return 1;
    }
    $a = 0;
    $b = 1;
    $c = 1;
    $d = 0;
    for ($i = 0; $i < $n - 2; $i++) {
        $d = $a + $b + $c;
        $a = $b;
        $b = $c;
        $c = $d;
    }
    return $d;
}
}