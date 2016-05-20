<?php
/**
 * Created by PhpStorm.
 * User: fangz
 * Date: 2016/4/18
 * Time: 2:31
 */
class getTime{
    public static function requestTime(){
        $url = "http://api.k780.com:88/?app=life.time&appkey=18925&sign=ccd67f7fe1815ea938e87bd2aec2f510&format=xml";
        $string = file_get_contents($url);
        $ret = self::Time($string);
        //var_dump($string);
        return $ret;
    }
    public static function Time($xml)
    {
        $time = simplexml_load_string($xml);
        $beijingTime = $time->result->datetime_2;
        $beijingWeek = self::Week($time);
        //var_dump($beijingTime);
        $arr  = array('time' => $beijingTime , 'week' => $beijingWeek);
        $json = json_encode($arr);
        return $json;
        
    }
    public static function Week($xml)
    {
       $week=$xml->result->week_2;
       //var_dump($week);
       return $week;
    }

}
//$url= "http://api.k780.com:88/?app=life.time&appkey=18925&sign=ccd67f7fe1815ea938e87bd2aec2f510&format=xml";
//file_get_contents($url);
