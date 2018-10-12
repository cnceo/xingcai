<?php
error_reporting(0);
$config = mysql_connect("43.226.68.13","root","Lulin0124")or die("Mysql Connect Error");//设置数据库IP，账号，密码
mysql_select_db("xingcai");//数据库库名
mysql_query("SET NAMES UTF8");
?>