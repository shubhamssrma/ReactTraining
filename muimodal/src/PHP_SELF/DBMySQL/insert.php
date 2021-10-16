<?php 
    require "db.php";

    // $sql = $_POST['Query'];
    $partName = $_POST['partName'];
    $sql = "INSERT INTO demo(part_name)VALUES('{$partName}')";
    $result = mysqli_query($conn,$sql) or die("Query failed");

    if($result){
        echo "inserted successfully";
    }else{
        http_response_code(422);
    }
    // $postdata = file_get_contents("PHP://input");

    // if(isset($postdata) && !empty($postdata)){
    //     $request = json_decode($postdata);
    //     print_r($request);
    //     $partName = $request->partName;

    //     $sql = "INSERT INTO demo('part_name')VALUES('{$partName}')";

    //     if(mysqli_query($conn,$sql)){
    //         http_response_code(201);
    //     }else{
    //         http_response_code(422);
    //     }
    // }
?>