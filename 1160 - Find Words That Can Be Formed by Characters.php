<?php


class Solution
{

    /**
     * @param String[] $words
     * @param String $chars
     * @return Integer
     */
    function countCharacters($words, $chars)
    {
        $count = array();
        $chars = str_split($chars);
        foreach ($chars as $c) {
            if (isset($count[$c])) {
                $count[$c]++;
            } else {
                $count[$c] = 1;
            }
        }

        $res = 0;
        foreach ($words as $word) {
            $t = array();
            $word = str_split($word);
            foreach ($word as $c) {
                if (isset($t[$c])) {
                    $t[$c]++;
                } else {
                    $t[$c] = 1;
                }
            }
            $good = true;
            foreach ($t as $k => $v) {
                if (!isset($count[$k])) {
                    $good = false;
                    break;
                } else if ($count[$k] < $v) {
                    $good = false;
                    break;
                }
            }
            if ($good) {
                $res += count($word);
            }
        }
        return $res;
    }
}
