<?php
/**
 * Created by PhpStorm.
 * User: fangz
 * Date: 2016/4/18
 * Time: 2:49
 */

        require_once "getTime.php";
         $data = getTime::requestTime();
         //echo $a;
         $callback = $_GET['callback'];
         echo $callback.'('.$data.')';
         exit;