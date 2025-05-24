<?php
// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/php
    

function accum($s) {
    $split = str_split($s);
    return implode('-', array_map(function($v, $i) {
        return strtoupper($v) . str_repeat(strtolower($v), $i);
    }, $split, array_keys($split)));
}

echo accum('sanjay');
echo PHP_EOL;

?>