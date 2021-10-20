<?php
    require 'db.php';

    $options = array("UID" => $username,"PWD" => $password,"Database" => $database,"CharacterSet" => "UTF-8");

    $conn = sqlsrv_connect($host,$options);

    $folderPath = "upload-react/";
    $file_tmp = $_FILES['file']['tmp_name'];
    $file_ext = strtolower(end(explode('.',$_FILES['file']['name'])));
    $file = $folderPath . uniqid() . '.'.$file_ext;

    $sql = "INSERT into test_table3 (file_name)VALUES('{$file_tmp}')";
    $result = sqlsrv_query($conn,$sql);
    
    if($result){
        move_uploaded_file($path,$file_name);
        return json_encode(['status'=>true]);
        echo "success";
    }else{
        echo "failed";
    }
    // if(in_array($file_ext,$extensions)=== false){
    //    $errors[]="extension not allowed, please choose a JPEG or PNG file.";
    // }
    
    // if($file_size > 2097152){
    //    $errors[]='File size must be excately 2 MB';
    // }
    
    // if(empty($errors)==true){
    //    move_uploaded_file($file_tmp,"images/".$file_name);
    //    echo "Success";
    // }else{
    //    print_r($errors);
    // }
    // $file = $_POST['file'];
    // File upload path
    // $targetDir = "uploads/";
    // $fileName = basename($_FILES["file"]["name"]);
    // $targetFilePath = $targetDir . $fileName;
    // $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

    // if(!empty($_FILES["file"]["filename"])){
    //     // Allow certain file formats
    //     $allowTypes = array('jpg','png','jpeg','gif','pdf');
    //     if(in_array($fileType, $allowTypes)){
    //         // Upload file to server
    //         if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
    //             // Insert image file name into database
    //             $sql = "INSERT into test_table3 (file_name)VALUES('{$fileName}')";
    //             $result = sqlsrv_query($conn,$sql);
    //             if($result){
    //                 $statusMsg = "The file ".$fileName. " has been uploaded successfully.";
    //             }else{
    //                 $statusMsg = "File upload failed, please try again.";
    //             } 
    //         }else{
    //             $statusMsg = "Sorry, there was an error uploading your file.";
    //         }
    //     }else{
    //         $statusMsg = 'Sorry, only JPG, JPEG, PNG, GIF, & PDF files are allowed to upload.';
    //     }
    // }else{
    //     $statusMsg = 'Please select a file to upload.';
    // }
    
    // // Display status message
    // echo $statusMsg;

?>