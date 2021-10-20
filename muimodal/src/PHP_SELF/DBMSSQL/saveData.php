<?php
	include 'db.php';

	sqlsrv_configure("WarningsReturnAsErrors", 0);

	$options = array(  "UID" => $username,  "PWD" => $password ,  "Database" =>$database ,"CharacterSet" => "UTF-8");
	
	$conn = sqlsrv_connect($host, $options);

	// $sql = "SELECT * FROM  test_table4 WHERE ID = (SELECT MAX(ID)  FROM test_table4)";
	$sql = "SELECT * FROM  test_table4";
	// $sql = $_POST['Query'];
	$queryResult = sqlsrv_query($conn,$sql);
	if($queryResult){
		$array = [];
		$filterresult = [];
		$FinalArray = array();
		$rsarray=[];	
		// echo $str;
		do {
			if( $queryResult === false) {
				print "Error";
				die( print_r( sqlsrv_errors(), true) );
			}
			$result = array();
			$isFilterData=0;
			$rsname='';
			$table=[]; 
		    while ($row = sqlsrv_fetch_array($queryResult,SQLSRV_FETCH_ASSOC))
		    {
				$cleanrow=[];
				//print_r($row);
				foreach(sqlsrv_field_metadata($queryResult) as $field)
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
		
		} while (sqlsrv_next_result($queryResult));
		// print_r($rsarray);
		echo json_encode($rsarray);
	}else{
		http_response_code(422);
	}
		
?>

				