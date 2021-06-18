<?php

class Solution {


/**
* @param Integer[] $arr1
* @param Integer[] $arr2
* @return Integer[]
*/
function relativeSortArray($arr1, $arr2) {
    $f = array_fill(0, 1001, 0);
    $res = array_fill(0, count($arr1), 0);
    $idx = 0;
    foreach ($arr1 as $n) {
        $f[$n]++;
    }
    foreach ($arr2 as $n) {
        for ($i = 0; $i < $f[$n]; $i++) {
            $res[$idx++] = $n;
        }
        $f[$n] = 0;
    }
    for ($i = 0; $i < 1001; $i++) {
        for ($j = 0; $j < $f[$i]; $j++) {
            $res[$idx++] = $i;
        }
    }
    return $res;
}
}