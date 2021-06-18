<?php

class Solution
{

    public $m = 1000000000 + 7;
    /**
     * @param Integer $n
     * @return Integer
     */
    function numPrimeArrangements($n)
    {
        if ($n == 1) return 1;
        $primeCount = 0;
        for ($i = 2; $i <= $n; $i++) {
            if ($this->isPrime($i))
                $primeCount++;
        }

        $res = ($this->fac($primeCount) * $this->fac($n - $primeCount));
        return ($res % $this->m);
    }

    function fac($n)
    {
        $res = 1;
        for ($i = 2; $i <= $n; $i++) {
            $res *= $i;
            $res %= $this->m;
        }
        return $res;
    }
    function isPrime($n)
    {
        for ($i = 2; $i * $i <= $n; $i++) {
            if ($n % $i == 0)
                return false;
        }
        return true;
    }
}
