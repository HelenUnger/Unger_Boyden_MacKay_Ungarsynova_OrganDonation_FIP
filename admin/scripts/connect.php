<?php 
$db_dsn = array(
	'host'=>'localhost',
	'dbname'=>'db_tourism',
	'charset'=>'utf8'
);

$dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

//username and password for mysql database
$db_user = 'root';
$db_pass = '';

try{
	$pdo = new PDO($dsn, $db_user, $db_pass);
	// var_export($pdo);
}catch(PDOException $exception){
	echo 'Connection Error:'.$exception->getMessage();
	exit();
}