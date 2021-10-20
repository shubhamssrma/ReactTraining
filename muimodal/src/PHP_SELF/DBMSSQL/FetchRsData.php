<?php
include 'db.php';
// echo json_decode($_POST['Query']);
// die();
 //$database = $_POST["OrgDBName"];
 //$username = $_POST["DbUser"];
 //$password = $_POST["DbPass"];
 //$serverip = $_POST["ServerIP"];
 //$usercode = $_POST["Usercode"];
//  session_start();
// error_log(print_r($_SESSION, TRUE));  
//  $username = $_POST['userName'] ;
//  $password = $_POST['Pass'] ;
//  $serverip = $_POST['ServerName'] ;
//  $database = $_POST['dbName']; 
 //$username = 'sa';
 //$password = '123@hex';
 //$serverip = 'hexbis.xyz';
 //$database = 'HRApp_OrgDB_Hex'; 
//$empid = $_POST["EmpId"];
 //$clientdetails = $_POST["Clientdetails"];
 sqlsrv_configure("WarningsReturnAsErrors", 0);
 $options = array(  "UID" => $username,  "PWD" => $password ,  "Database" =>$database ,"CharacterSet" => "UTF-8");
 $localserver = sqlsrv_connect($host, $options);
		$sql = $_POST['Query'];                                                                                                         
		$query = sqlsrv_query($localserver,$sql);
		if($query){
			$array = [];
			// $filterresult = [];
			$FinalArray = array();
			$rsarray=[];	
			//echo $str;
			do {
				if( $query === false) {
					print "Error";
					die( print_r( sqlsrv_errors(), true) );
				}
				$result = array();
				$isFilterData=0;
				$rsname='';
				$table=[]; 
			while ($row = sqlsrv_fetch_array($query,SQLSRV_FETCH_ASSOC))
			{
					$cleanrow=[];
					//print_r($row);
					foreach(sqlsrv_field_metadata($query) as $field)
					{
						$key=$field['Name'];
						$item=$row[$key];
						$is=0; 
						$pass ='';
						if (strpos($key, '#') !== false)
						{
							$First = "$";
							$Second = "#";	
							$Firstpos=strpos($key, $First);
							$Secondpos=strpos($key, $Second);
							$rsname = substr($key , $Firstpos+1, $Secondpos-1);
							$pass='$'.$rsname.'#';
						}
						$cleankey=str_replace($pass,"",$key);
						//print_r($field['Type'] );
						if($field['Type'] === -3)
						{
							$cleanrow[$cleankey]=base64_encode($row[$key]);
						}
						else
						{	
							// try {
							// 	$val = (string)$row[$key];
							// 	$cleanrow[$cleankey]=utf8_encode($val);//iconv(mb_detect_encoding($val), "UTF-8",$val);//utf8_encode ($row[$key]);
							// } catch (Exception $e) {
							// 	echo $e;
							// }
							$cleanrow[$cleankey]=$row[$key];
						

						}
					}
					array_push($table,$cleanrow);						
			}
				//echo $rsname;  
			
			if (array_key_exists($rsname,$rsarray))
				{
					$rsarray[$rsname]=array_merge($table,$rsarray[$rsname]);
				}
				else{
					$rsarray[$rsname]=$table;
				}
			//print_r($rsarray);
			if ($rsname == "PushNotification"){
				$dbname =  $rsarray[$rsname][0]["OrgDBName"]; 
				$post = [
						'OrgDBName'   => $dbname,
				];
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, "https://trackhr.hexbis.com/api/pushnotifyv2.php?OrgDBName=".$dbname."");
					curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
					// curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					$cres = curl_exec($ch);
			} 
			//echo json_encode($rsarray,JSON_FORCE_OBJECT);
			
			} while (sqlsrv_next_result($query));
			// print_r($rsarray);
			echo json_encode($rsarray);
		}else{
			http_response_code(422);
		}
		
	 
?>

				