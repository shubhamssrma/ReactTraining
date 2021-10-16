<?php
header('Access-Control-Allow-Origin: *');
// $host = "localhost";
// $username = "sa";
// $password = "123@hex";
// $database = "TestDatabase";

$conn = mysqli_connect("localhost",'root','','testing') or die("Connection failed");


// $arr = ["ServerName" => $host,"userName" => $username,"Pass" => $password,"dbName" => $database];
// echo json_encode($arr);
/*
sqlsrv_configure("WarningsReturnAsErrors", 0);

$options = array("UID" => $username, "PWD" => $password, "Database" => $database, "CharacterSet" => "UTF-8");		// Sending Options

$str = 'getpartname';  // Using Stored Procedure Value

$localserver = sqlsrv_connect($host, $options) or die(print_r(sqlsrv_errors(), true)); 	// Establishing Connection

$query = sqlsrv_query($localserver, $str) or die("Select Query Unsuccessful");		// Passing Query

if ($query)								
{
	while($row = sqlsrv_fetch_object($query)){
		$jsonArray[] = $row;
	}
	echo json_encode($jsonArray);
}
*/
?>