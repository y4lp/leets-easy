<?php
class Solution
{

    /**
     * @param String $address
     * @return String
     */
    function defangIPaddr($address)
    {
        $res = str_replace('.', '[.]', $address);
        return $res;
    }
}
