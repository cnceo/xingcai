<?
$api = 'http://103.45.107.15:81/xml/PK10.php';
$resource = file_get_contents( $api );  
$data = json_decode( $resource , 1 );

$ct = $data['c_t'];

$cd = $data['c_d'];

$cr = $data['l_r'];

header('Content-Type: text/xml;charset=utf8');
$limit=strlen($ct)-2;

$ct=substr($ct,0,$limit).''.substr($ct,$limit,$limit+2);


echo '<xml>
<row expect="'.$ct.'" opencode="'.$cr.'" opentime="'.str_replace('/','-',$cd).'"/>
</xml>';