<?php

class Solution
{

    /**
     * @param Integer[][] $dominoes
     * @return Integer
     */
    function numEquivDominoPairs($dominoes)
    {
        $eq = array_fill(0, 100, 0);
        $res = 0;
        foreach ($dominoes as $d) {
            $val = $d[0] <= $d[1] ? $d[0] * 10 + $d[1] : $d[1] * 10 + $d[0];
            $res += $eq[$val];
            $eq[$val]++;
        }
        return $res;
    }
}
