<?php

class Solution
{

    /**
     * @param Integer[] $distance
     * @param Integer $start
     * @param Integer $destination
     * @return Integer
     */
    function distanceBetweenBusStops($distance, $start, $destination)
    {
        $pa = 0;
        $pb = 0;
        $a = min($start, $destination);
        $b = max($start, $destination);
        foreach ($distance as $d) {
            $pb += $d;
        }

        for ($i = $a; $i < $b; $i++) {
            $pa += $distance[$i];
        }
        return min($pa, $pb - $pa);
    }
}
